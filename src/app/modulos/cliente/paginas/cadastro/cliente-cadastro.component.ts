import { Component, OnInit } from '@angular/core';
import { ClienteCadastroService } from './cliente-cadastro.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import { TipoContaEnum } from 'src/app/shared/enums/tipo-conta.enum';

@Component({
	selector: 'app-cliente-cadastro',
	templateUrl: './cliente-cadastro.component.html',
	styleUrls: ['./cliente-cadastro.component.scss'],
	providers: [ClienteCadastroService]
})
export class ClienteCadastroComponent implements OnInit {

	cliente: any = {
		conta: {
            chavePrimaria: {
                id: null,
                tipoConta: null
            }
        },
        agencia: {
            id: null
        }
	};
	routeParams: any;
	isEdicao: boolean = false;
	agencias: Array<any>;

	readonly tipoContaEnum: typeof TipoContaEnum = TipoContaEnum;

	constructor(private clienteCadastroService: ClienteCadastroService,
		private route: ActivatedRoute,
        private router: Router,
		private notificacaoService: NotificacaoService) { 

	}

	ngOnInit() {
		this.obterParamsURL();
		this.obterAgencias();
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
        this.clienteCadastroService.obterCliente(this.routeParams.codigoCliente).subscribe((response: any) => {
            this.cliente = response;
            this.cliente.conta.tipoConta = response.conta.tipoConta.codigo;
            console.log(response);
        })
	}
	
	obterAgencias(): void {
        this.clienteCadastroService.obterAgencias().subscribe((response: any) => {
            this.agencias = response;
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
		this.cliente = {
			conta: {
                chavePrimaria: {
                    id: null,
                    tipoConta: null
                }
            },
            agencia: {
                id: null
            }
		};
	}

}
