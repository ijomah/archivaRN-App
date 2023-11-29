import  * as FileSystem  from "expo-file-system";

let download = false;
const baseUrl = 'http://192.168.110.37:3000';
const path = '/api/v1/files';
const downloaPathType = download? '/filessave' : '/filesview';
const slug = 'img1700317933741.png';

const url = baseUrl+path+downloaPathType;

export const downloadScannedImg = async (slug='img1700317933741.png') => {
    // `http://192.168.158.227:3000/api/v1/files/filesview/${slug}`
    try {
        const res = await FileSystem.downloadAsync(`https://archiver-4de6.onrender.com/api/v1/files/filesview/${slug}`,
            FileSystem.documentDirectory + `${slug}`
        )
        .then(({uri}) => {
            ToastAndroid.show(`Finished downloading, ${uri}`, ToastAndroid.LONG);
            console.log('phone fs', FileSystem.documentDirectory);
            console.log('Downloading done!', uri);
                    //LIST OF console.logs
            // phone fs file:///data/user/0/host.exp.exponent/files/
            // Downloading done! file:///data/user/0/host.exp.exponent/files/img1700317933741.png
            // phone fs file:///data/user/0/host.exp.exponent/files/
            // Downloading done! file:///data/user/0/host.exp.exponent/files/img1700317933741
            // phone fs file:///data/user/0/host.exp.exponent/files/
            // Downloading done! file:///data/user/0/host.exp.exponent/files/img170031793374
            // phone fs file:///data/user/0/host.exp.exponent/files/
            // Downloading done! file:///data/user/0/host.exp.exponent/files/img1700317933741.png
            return uri;
        })
        .catch(error =>  console.log('download error1', error))
    } catch(error) {
        console.error('download error2', error);
    }

    
}