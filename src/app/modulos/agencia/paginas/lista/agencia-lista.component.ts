import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciaListaService } from './agencia-lista.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';

@Component({
    selector: 'app-agencia-lista',
    templateUrl: './agencia-lista.component.html',
    styleUrls: ['./agencia-lista.component.scss'],
    providers: [AgenciaListaService]
})
export class AgenciaListaComponent implements OnInit {

    agencias: Array<any>;

    constructor(private router: Router,
        private agenciaListaService: AgenciaListaService,
        private notificacaoService: NotificacaoService) { }

    ngOnInit() {
    }

    obterAgencias(): void {
        this.agenciaListaService.obterAgencias().subscribe((response: any) => {
            this.agencias = response.data;
        })
    }

    editar(agencia: any): void {
        this.router.navigate(['/agencia', agencia.codigo]);
    }

    excluir(agencia: any): void {
        this.agenciaListaService.excluir(agencia.codigo).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);(Mensagem.ACAO_SUCESSO);
        })
    }
    

}
