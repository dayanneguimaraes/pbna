import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteListaService {

    private URL = environment.urlBackEnd;

    constructor(private http: HttpClient) { }

    obterClientes(): Observable<any> {
        return this.http.get(this.URL + 'cliente');
    }

}
