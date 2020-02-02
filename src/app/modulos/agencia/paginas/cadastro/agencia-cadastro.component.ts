import { Component, OnInit } from '@angular/core';
import { AgenciaCadastro } from './agencia-cadastro';
import { AgenciaCadastroService } from './agencia-cadastro.service';
import { Agencia } from './agencia';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';

@Component({
    selector: 'app-agencia-cadastro',
    templateUrl: './agencia-cadastro.component.html',
    styleUrls: ['./agencia-cadastro.component.scss'],
    providers: [AgenciaCadastroService]
})
export class AgenciaCadastroComponent extends AgenciaCadastro implements OnInit {

    agencia: Agencia;

    constructor(private agenciaCadastroService: AgenciaCadastroService,
        private notificacaoService: NotificacaoService) {
        super();
    }

    ngOnInit() {
    }

    obterAgencia(): void {
        const codigo: number = 0;
        this.agenciaCadastroService.obterAgencia(codigo).subscribe((response: Agencia) => {
            this.agencia = response;
        })
    }

    salvar(): void {
        this.agenciaCadastroService.incluir(this.agencia).subscribe((response: Agencia) => {
            this.notificacaoService.success('Agência incluida com sucesso');
        });
    }

    alterar(): void {
        this.agenciaCadastroService.alterar(this.agencia).subscribe((response: Agencia) => {
            this.notificacaoService.success('Agência incluida com sucesso');
        });
    }

}
