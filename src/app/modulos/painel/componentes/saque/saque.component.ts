import { Component, OnInit } from '@angular/core';
import { SaqueService } from './saque.service';
import { NotificacaoService } from 'src/app/shared/componentes/notificacao/notificacao.service';
import { Mensagem } from 'src/app/shared/constantes/mensagem.constant';
import { TipoContaEnum } from 'src/app/shared/enums/tipo-conta.enum';

@Component({
    selector: 'app-saque',
    templateUrl: './saque.component.html',
    styleUrls: ['./saque.component.scss'],
    providers: [SaqueService]
})
export class SaqueComponent implements OnInit {

    saque: any = {
        conta: {
            chavePrimaria: {
                id: null
            }
        }
    };

    readonly tipoContaEnum: typeof TipoContaEnum = TipoContaEnum;

    constructor(private saqueService: SaqueService,
        private notificacaoService: NotificacaoService) { }

    ngOnInit() {
    }

    limpar(): void {
        this.saque = {
            conta: {
                chavePrimaria: {
                    id: null
                }
            }
        };
    }

    salvar(): void {
        this.saqueService.incluir(this.saque).subscribe((response: any) => {
            this.notificacaoService.success(Mensagem.ACAO_SUCESSO);
            this.limpar();
        }, ((erro: any) => {
            this.notificacaoService.error(erro.error);
        }));
    }

}
