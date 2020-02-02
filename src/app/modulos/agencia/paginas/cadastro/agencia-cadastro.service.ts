import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Agencia } from './agencia';
import { Observable } from 'rxjs';

@Injectable()
export class AgenciaCadastroService {

    private URL = environment.urlBackEnd;

    constructor(private http: HttpClient) { }

    incluir(agencia: Agencia): Observable<any> {
        return this.http.post(this.URL + 'agencia/', agencia);
    }

    alterar(agencia: Agencia): Observable<any> {
        return this.http.put(this.URL + 'agencia/', agencia);
    }

    obterAgencia(codigo: number): Observable<any> {
        return this.http.get(this.URL + 'agencia/' + codigo);
    }

}
