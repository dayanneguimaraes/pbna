import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteListaService } from './cliente-lista.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';

@Component({
    selector: 'app-cliente-lista',
    templateUrl: './cliente-lista.component.html',
    styleUrls: ['./cliente-lista.component.scss'],
    providers: [ClienteListaService]
})
export class ClienteListaComponent implements OnInit {

    clientes: Array<any>;

    constructor(private router: Router,
        private clienteListaService: ClienteListaService,
        private notificacaoService: NotificacaoService) { }

    ngOnInit() {
        // this.obterClientes();
    }

    obterClientes(): void {
        this.clienteListaService.obterClientes().subscribe((response: any) => {
            this.clientes = response.data;
        })
    }

    editar(cliente: any): void {
        this.router.navigate(['/cliente', cliente.codigo]);
    }

    excluir(cliente: any): void {
        this.clienteListaService.excluir(cliente.codigo).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);('Excluido com sucesso')
        })
    }


}
