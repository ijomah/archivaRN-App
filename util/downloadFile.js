import  * as FileSystem  from "expo-file-system";
import { BACKEND_URL } from "../api/apiEnv";

let download = false;
const baseUrl = 'http://192.168.110.37:3000';
const path = '/api/v1/files';
const downloaPathType = download? '/filessave' : '/filesview';
const slug = '1a129f446b45199464331c465a0bc47f'
// 'img1700317933741.png';
// uploads/1a129f446b45199464331c465a0bc47f

const url = baseUrl+path+downloaPathType;

const imgDir = FileSystem.documentDirectory+'archiving/';
const imgFileUri = (pixId) => imgDir + `${pixId}.jpg`;

//Check if dir exists if not make one
async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
      console.log("Image directory doesn't exist, creating…");
      await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
    }
  }

export async function downloadManyScannedImg(bunchData) {
    await ensureDirExists();
    try {
        const uriArr = await Promise
            .all(bunchData
                .map(singleImgData => FileSystem
                    .downloadAsync(
                        BACKEND_URL+`/api/v1/files/filessave/${singleImgData[0].img_name}`,
                        imgFileUri(singleImgData[0].img_name)
                    )
                )
            );
            // console.log('bunchData img', uriArr)
            return uriArr;      
    } catch(error) {
        console.error('Bunch Img download error', error);
    }
}    

export const downloadScannedImg = async (slug='1a129f446b45199464331c465a0bc47f') => {
    // `http://192.168.158.227:3000/api/v1/files/filesview/${slug}`
    
    try {
        await ensureDirExists();
        const uri = await FileSystem.downloadAsync(`https://archiver-4de6.onrender.com/api/v1/files/filessave/${slug}`,
            imgDir + `${slug}.png`
        )
            // .then(({uri}) => {
            //    // ToastAndroid.show(`Finished downloading, ${uri}`, ToastAndroid.LONG);
            //     console.log('phone fs', FileSystem.documentDirectory);
            //     console.log('Downloading done!', uri);
            //             //LIST OF console.logs
            //     // phone fs file:///data/user/0/host.exp.exponent/files/
            //     // Downloading done! file:///data/user/0/host.exp.exponent/files/img1700317933741.png
            //     // phone fs file:///data/user/0/host.exp.exponent/files/
            //     // Downloading done! file:///data/user/0/host.exp.exponent/files/img1700317933741
            //     // phone fs file:///data/user/0/host.exp.exponent/files/
            //     // Downloading done! file:///data/user/0/host.exp.exponent/files/img170031793374
            //     // phone fs file:///data/user/0/host.exp.exponent/files/
            //     // Downloading done! file:///data/user/0/host.exp.exponent/files/img1700317933741.png
            //     return uri;
            // })
        return uri
    } catch(error) {
        console.error('Single img download error', error);
    }

    
}