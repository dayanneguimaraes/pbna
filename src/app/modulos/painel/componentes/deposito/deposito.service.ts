import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DepositoService {

    private URL = environment.urlBackEnd;

    constructor(private http: HttpClient) { }

    incluir(deposito: any): Observable<any> {
        return this.http.post(this.URL + 'deposito/', deposito);
    }

}
