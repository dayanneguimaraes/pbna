import { Component, OnInit } from '@angular/core';
import { ClienteCadastroService } from './cliente-cadastro.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
	selector: 'app-cliente-cadastro',
	templateUrl: './cliente-cadastro.component.html',
	styleUrls: ['./cliente-cadastro.component.scss'],
	providers: [ClienteCadastroService]
})
export class ClienteCadastroComponent implements OnInit {

	cliente: any = {};
	routeParams: any;
    isEdicao: boolean = false;

	constructor(private clienteCadastroService: ClienteCadastroService,
		private route: ActivatedRoute,
        private router: Router,
		private notificacaoService: NotificacaoService) { 

	}

	ngOnInit() {
	}

	obterParamsURL(): void {
        this.route.params.subscribe(params => {
            this.routeParams = params;
        });

        if (!_.isNil(this.routeParams) && !_.isEmpty(this.routeParams)) {
            this.isEdicao = true;
            this.obterCliente();
        }
    }

	obterCliente(): void {
        const codigo: number = 0;
        this.clienteCadastroService.obterCliente(codigo).subscribe((response: any) => {
            this.cliente = response;
        })
    }

    salvar(): void {
        this.clienteCadastroService.incluir(this.cliente).subscribe((response: any) => {
			this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
			this.limpar();
        });
    }

    alterar(): void {
        this.clienteCadastroService.alterar(this.cliente).subscribe((response: any) => {
			this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
			this.router.navigate(['/cliente']);
        });
	}

	limpar(): void {
		this.cliente = {};
	}

}
