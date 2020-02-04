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
 
    removeNotificacao(notificacao: Notificacao) {
        this.notificacoes = this.notificacoes.filter(x => x !== notificacao);
    }

    obterClassTipoMensagem(notificacao: Notificacao) {
        if (notificacao.type == NotificacaoType.Success) {
            return 'alert-success';
        } else {
            return 'alert-danger';
        }
    }
 
}