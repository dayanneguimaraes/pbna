import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-mensagem-erro-validacao',
    templateUrl: './mensagem-erro-validacao.component.html',
    styleUrls: ['./mensagem-erro-validacao.component.scss']
})
export class MensagemErroValidacaoComponent implements OnInit {

    @Input() mensagemErro: string;
    @Input() isErroValidacao: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
