import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from './transferencia.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';
import { TipoContaEnum } from 'src/app/shared/enums/tipo-conta.enum';

@Component({
    selector: 'app-transferencia',
    templateUrl: './transferencia.component.html',
    styleUrls: ['./transferencia.component.scss'],
    providers: [TransferenciaService]
})
export class TransferenciaComponent implements OnInit {

    transferencia: any = {
        contaOrigem: {
            chavePrimaria: {
                id: null
            }
        },
        contaDestino: {
            chavePrimaria: {
                id: null
            }
        }
    };

    readonly tipoContaEnum: typeof TipoContaEnum = TipoContaEnum;

    constructor(private transferenciaService: TransferenciaService,
        private notificacaoService: NotificacaoService) { }

    ngOnInit() {
    }

    limpar(): void {
        this.transferencia = {
            contaOrigem: {
                chavePrimaria: {
                    id: null
                }
            },
            contaDestino: {
                chavePrimaria: {
                    id: null
                }
            }
        }
    
    }

    salvar(): void {
        this.transferenciaService.incluir(this.transferencia).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
            this.limpar();
        }, ((erro: any) => {
            this.notificacaoService.error(erro.error);
        }));
    }

}
