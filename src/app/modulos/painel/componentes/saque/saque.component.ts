import { Component, OnInit } from '@angular/core';
import { SaqueService } from './saque.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';

@Component({
    selector: 'app-saque',
    templateUrl: './saque.component.html',
    styleUrls: ['./saque.component.scss'],
    providers: [SaqueService]
})
export class SaqueComponent implements OnInit {

    saque: any = {
        conta: {
            id: null
        }
    };

    constructor(private saqueService: SaqueService,
        private notificacaoService: NotificacaoService) { }

    ngOnInit() {
    }

    limpar(): void {
        this.saque = {
            conta: {
                id: null
            }
        };
    }

    salvar(): void {
        this.saqueService.incluir(this.saque).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
        }, ((erro: any) => {
            this.notificacaoService.error(erro);
        }));
    }

}
