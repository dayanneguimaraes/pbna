import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
 
import { Notificacao, NotificacaoType } from './notificacao';
 
@Injectable({
    providedIn: 'root'
})
export class NotificacaoService {
    private subject = new Subject<Notificacao>();
    private manterTrocarRota = false;
 
    constructor(private router: Router) {
        
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.manterTrocarRota) {
                    this.manterTrocarRota = false;
                } else {
                    this.clear();
                }
            }
        });
    }
 
    getMensagem(): Observable<any> {
        return this.subject.asObservable();
    }
 
    success(message: string, manterTrocarRota: boolean = false) {
        this.mensagem(NotificacaoType.Success, message, manterTrocarRota);
    }
 
    error(message: string | Array<string>, manterTrocarRota: boolean = false) {
        this.mensagem(NotificacaoType.Error, message, manterTrocarRota);
    }
 
    info(message: string, manterTrocarRota: boolean = false) {
        this.mensagem(NotificacaoType.Info, message, manterTrocarRota);
    }
 
    warn(message: string, manterTrocarRota: boolean = false) {
        this.mensagem(NotificacaoType.Warning, message, manterTrocarRota);
    }
 
    mensagem(type: NotificacaoType, message: string | Array<string>, manterTrocarRota: boolean) {
        this.manterTrocarRota = manterTrocarRota;
        this.subject.next(<Notificacao>{ type: type, message: message , isLista: message instanceof Array});
        document.documentElement.scrollTop = 0;
    }
 
    clear() {
        this.subject.next();
    }
}