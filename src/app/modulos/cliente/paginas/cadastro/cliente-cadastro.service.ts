import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteCadastroService {

    private URL = environment.urlBackEnd;

    constructor(private http: HttpClient) { }

    incluir(cliente: any): Observable<any> {
        return this.http.post(this.URL + 'cliente/', cliente);
    }

    alterar(cliente: any): Observable<any> {
        return this.http.put(this.URL + 'cliente/', cliente);
    }

    obterCliente(codigo: number): Observable<any> {
        return this.http.get(this.URL + 'cliente/' + codigo);
    }

    obterAgencias(): Observable<any> {
        return this.http.get(this.URL + 'agencia');
    }

}
