import  * as FileSystem  from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { downloadScannedImg } from "./downloadFile";

// const downloadedFileUri = downloadScannedImg();
// const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

export const saveDownloadedFileAsync = async (downloadedFileUri) => {
    const permit = await MediaLibrary.requestPermissionsAsync();
    if(permit.granted === false) {
        return;
    }

    try {
        if (permit.status === 'granted' && permit.accessPrivileges !== 'limited' ) {
            if(typeof(downloadedFileUri) === 'string' && downloadedFileUri.startsWith('file://') ) {
                const asset = await MediaLibrary.createAssetAsync(downloadedFileUri);
                const album = await MediaLibrary.getAlbumAsync('Download');
                if(album == null) {
                    await MediaLibrary.createAlbumAsync('Download', asset, false);
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync([asset], album, false)
                }
            } else if(typeof(downloadedFileUri) === 'object' && downloadedFileUri.length > 0) {
                const asset = await Promise
                    .all(downloadedFileUri
                        .map(singleImgData => MediaLibrary.createAssetAsync(singleImgData.uri)
                        )
                    );
                    console.log('assets by MediaLib', asset)
                    
                    //This is the previous code
                    // const asset = await MediaLibrary.createAssetAsync(downloadedFileUri);
                const album = await MediaLibrary.getAlbumAsync('Download');
                if(album == null) {
                    await MediaLibrary.createAlbumAsync('Download', asset[0], false);
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync(asset, album, false)
                }
            }
            
        }
    } catch(e) {
        console.log('File saving err', e);
    }
}