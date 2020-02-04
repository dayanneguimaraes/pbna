import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExtratoService {

    private URL = environment.urlBackEnd;

    constructor(private http: HttpClient) { }

    obterExtrato(extrato: any): Observable<any> {
        return this.http.get(this.URL + 'extrato/' + extrato.id + '/' + extrato.tipoConta);
    }

    obterValorTotalConta(extrato: any): Observable<any> {
        return this.http.get(this.URL + '/obter-valor-conta/', extrato);
    }

}
