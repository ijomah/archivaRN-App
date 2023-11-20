import { handleResponse, handleError } from 'apiUtil';
const baseUrl = process.env.REACT_APP_API_URL + '/images/';

export const getImages = async () => {
    return await fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export const getImgBySlug = async (slug) => {
    return await fetch(baseUrl + "?slug=" + slug)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok.');
            return response.json().then(img => {
                if (img.length !== 1) throw new Error('Course not found: '+slug);
                return img[0];  // should only find one course for a given slug,
                //so return it
            })
        })
        .catch(handleError);
}

export const saveImg = async () => {
    return await fetch(baseUrl + (img.id || ''), {
        method: img.id? 'PUT' : 'POST',  //POST for create, 
        //PUT to update when id already exists.
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            ...img,
            imgId: img.imgId 
        })
    })
        .then(handleResponse)
        .catch(handleError);
}

export const deleteImg = async (imgId) => {
    return await fetch(baseUrl + imgId, {method: 'DELETE'})
        .then(handleResponse)
        .catch(handleError);
}