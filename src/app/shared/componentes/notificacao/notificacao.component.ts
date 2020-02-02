import { Component } from '@angular/core';
 
import { Notificacao, NotificacaoType } from './notificacao';
import { NotificacaoService } from './notificacao.service';
 
@Component({
    selector: 'notificacao',
    templateUrl: 'notificacao.component.html',
    styleUrls: ['./notificacao.component.scss']
})
 
export class NotificacaoComponent {
    notificacoes: Notificacao[] = [];
    isLista: boolean = true;
 
    constructor(private notificacaoService: NotificacaoService) { }
 
    ngOnInit() {
        this.notificacaoService.getMensagem().subscribe((notificacao: Notificacao) => {
            if (!notificacao) {
                this.notificacoes = [];
                return;
            }
            
            this.notificacoes.push(notificacao);

            setTimeout(() => {
                this.notificacoes = [];
            }, 7000);
        });
    }
 
    removeMensagem(notificacao: Notificacao) {
        this.notificacoes = this.notificacoes.filter(x => x !== notificacao);
    }
 
    cssClassMensagem(notificacao: Notificacao) {
        if (!notificacao) {
            return;
        }

        switch (notificacao.type) {
            case NotificacaoType.Success:
                return 'alert alert-success';
            case NotificacaoType.Error:
                return 'alert alert-danger';
            case NotificacaoType.Info:
                return 'alert alert-info';
            case NotificacaoType.Warning:
                return 'alert alert-warning';
        }
    }
    notificacaoIconeClass(notificacao: Notificacao) {
        if (!notificacao) {
            return;
        }

        switch (notificacao.type) {
            case NotificacaoType.Success:
                return 'far fa-check-circle';
            case NotificacaoType.Error:
                return 'fas fa-exclamation-triangle';
            case NotificacaoType.Info:
                return 'fas fa-info-circle';
            case NotificacaoType.Warning:
                return 'fas fa-exclamation';
        }
    }
}