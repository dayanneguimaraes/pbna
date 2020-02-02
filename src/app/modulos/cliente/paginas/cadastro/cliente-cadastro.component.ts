import { Component, OnInit } from '@angular/core';
import { ClienteCadastroService } from './cliente-cadastro.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';

@Component({
	selector: 'app-cliente-cadastro',
	templateUrl: './cliente-cadastro.component.html',
	styleUrls: ['./cliente-cadastro.component.scss'],
	providers: [ClienteCadastroService]
})
export class ClienteCadastroComponent implements OnInit {

	cliente: any = {};

	constructor(private clienteCadastroService: ClienteCadastroService,
		private notificacaoService: NotificacaoService) { 

	}

	ngOnInit() {
	}

	obterCliente(): void {
        const codigo: number = 0;
        this.clienteCadastroService.obterCliente(codigo).subscribe((response: any) => {
            this.cliente = response;
        })
    }

    salvar(): void {
        this.clienteCadastroService.incluir(this.cliente).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);('Agência incluida com sucesso');
        });
    }

    alterar(): void {
        this.clienteCadastroService.alterar(this.cliente).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);('Agência incluida com sucesso');
        });
	}

	limpar(): void {
		this.cliente = {};
	}

}
