import { Component, OnInit } from '@angular/core';
import { DepositoService } from './deposito.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';
import { TipoContaEnum } from 'src/app/shared/enums/tipo-conta.enum';

@Component({
    selector: 'app-deposito',
    templateUrl: './deposito.component.html',
    styleUrls: ['./deposito.component.scss'],
    providers: [DepositoService]
})
export class DepositoComponent implements OnInit {

    deposito: any = {
        conta: {
            chavePrimaria: {
                id: null
            }
        }
    };

    readonly tipoContaEnum: typeof TipoContaEnum = TipoContaEnum;

    constructor(private depositoService: DepositoService,
        private notificacaoService: NotificacaoService) { }

    ngOnInit() {
    }

    salvar(): void {
        this.depositoService.incluir(this.deposito).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
            this.limpar();
        }, ((erro: any) => {
            this.notificacaoService.error(erro.error);
        }));
    }


    limpar(): void {
        this.deposito = {
            conta: {
                chavePrimaria: {
                    id: null
                }
            }
        };
    }
}
