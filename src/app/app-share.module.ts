import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemErroValidacaoComponent } from './shared/componentes/mensagem-erro-validacao/mensagem-erro-validacao.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        MensagemErroValidacaoComponent
    ],
    providers: [],
    exports: [
        MensagemErroValidacaoComponent
    ],
    entryComponents: []
})
export class AppShareModule { }
