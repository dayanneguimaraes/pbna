import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
 
import { Notificacao } from './notificacao';
 
@Injectable({
    providedIn: 'root'
})
export class NotificacaoService {
    private subject = new Subject<Notificacao>();
 
    constructor(private router: Router) {
        
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                    this.clear();
            }
        });
    }
 
    getMensagem(): Observable<any> {
        return this.subject.asObservable();
    }
 
    success(message: string) {
        this.mensagem(message);
    }
 
    mensagem(message: string | Array<string>) {
        this.subject.next(<Notificacao>{ message: message});
        document.documentElement.scrollTop = 0;
    }
 
    clear() {
        this.subject.next();
    }
}