import { Component, OnInit } from '@angular/core';
import { AgenciaCadastroService } from './agencia-cadastro.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector: 'app-agencia-cadastro',
    templateUrl: './agencia-cadastro.component.html',
    styleUrls: ['./agencia-cadastro.component.scss'],
    providers: [AgenciaCadastroService]
})
export class AgenciaCadastroComponent implements OnInit {

    agencia: any = {};
    routeParams: any;
    isEdicao: boolean = false;

    constructor(private agenciaCadastroService: AgenciaCadastroService,
        private route: ActivatedRoute,
        private router: Router,
        private notificacaoService: NotificacaoService) {
    }

    ngOnInit() {
        this.obterParamsURL();
    }

    obterParamsURL(): void {
        this.route.params.subscribe(params => {
            this.routeParams = params;
        });

        if (!_.isNil(this.routeParams) && !_.isEmpty(this.routeParams)) {
            this.isEdicao = true;
            this.obterAgencia();
        }
    }

    obterAgencia(): void {
        this.agenciaCadastroService.obterAgencia(this.routeParams.codigoAgencia).subscribe((response: any) => {
            this.agencia = response;
        })
    }

    salvar(): void {
        this.agenciaCadastroService.incluir(this.agencia).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
            this.limpar();
        });
    }

    alterar(): void {
        this.agenciaCadastroService.alterar(this.agencia).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
            this.router.navigate(['/agencia']);
        });
    }

    limpar(): void {
        this.agencia = {};
    }

}
