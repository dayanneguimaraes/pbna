import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgenciaListaService {

    private URL = environment.urlBackEnd;

    constructor(private http: HttpClient) { }

    excluir(codigo: number): Observable<any> {
        return this.http.delete(this.URL + 'agencia/' + codigo);
    }

}
