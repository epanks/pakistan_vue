import {http, httpFile} from './http_service';

export function createPaket(data) {
    return httpFile().post('/paket',data);
}
