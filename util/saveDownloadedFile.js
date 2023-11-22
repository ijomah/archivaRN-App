import  * as FileSystem  from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { downloadScannedImg } from "./downloadFile";

// const downloadedFileUri = downloadScannedImg();
const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

export const saveDownloadedFileAsync = async (downloadedFileUri) => {
    if(permissionResponse.granted === false) {
        return;
    }

    try {
        if (permissionResponse.granted === true && permissionResponse.accessPrivileges === 'limited' ) {
            const asset = await MediaLibrary.createAssetAsync(downloadedFileUri);
            const album = await MediaLibrary.getAlbumAsync('Download');
            if(album == null) {
                await MediaLibrary.createAlbumAsync('Download', asset, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false)
            }
        }
    } catch(e) {
        console.log('File saving err', e);
    }
}