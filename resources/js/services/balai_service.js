import {
    http,
    httpFile
} from './http_service';

export function createBalai(data) {
    return httpFile().post('/balai', data);
}


export function loadBalai() {
    return http().get('/balai');
}
