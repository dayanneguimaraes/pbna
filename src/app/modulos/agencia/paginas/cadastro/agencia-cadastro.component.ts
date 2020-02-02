import { Component, OnInit } from '@angular/core';
import { AgenciaCadastroService } from './agencia-cadastro.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';

@Component({
    selector: 'app-agencia-cadastro',
    templateUrl: './agencia-cadastro.component.html',
    styleUrls: ['./agencia-cadastro.component.scss'],
    providers: [AgenciaCadastroService]
})
export class AgenciaCadastroComponent implements OnInit {

    agencia: any = {};

    constructor(private agenciaCadastroService: AgenciaCadastroService,
        private notificacaoService: NotificacaoService) {
    }

    ngOnInit() {
        // this.obterAgencia();
    }

    obterAgencia(): void {
        const codigo: number = 0;
        this.agenciaCadastroService.obterAgencia(codigo).subscribe((response: any) => {
            this.agencia = response;
        })
    }

    salvar(): void {
        this.agenciaCadastroService.incluir(this.agencia).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);('Agência incluida com sucesso');
        });
    }

    alterar(): void {
        this.agenciaCadastroService.alterar(this.agencia).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);('Agência incluida com sucesso');
        });
    }

    limpar(): void {
        this.agencia = {};
    }

}
