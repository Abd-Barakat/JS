import 'whatwg-fetch';
import { getBaseURL } from './baseURL';

const baseURL = getBaseURL();
export function GetUsers() {
    return get('Users');
}
export function DeleteUser(id) {
    del(`Users/${id}`);
}

function get(url) {
    return fetch(baseURL + url).then(OnSuccess, OnError);
}

function del(url) {
    const request = new Request(baseURL + url, {
        method: 'DELETE',
    });
    return fetch(request).then(OnSuccess, OnError);
}

function OnSuccess(response) {
    return response.json();
}

function OnError(err) {
    console.log(err); //eslint-disable-line no-console 
}