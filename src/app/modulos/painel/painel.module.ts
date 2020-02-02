import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from 'src/app/app-share.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PainelRoutingModule } from './painel-routing.module';
import { DepositoComponent } from './componentes/deposito/deposito.component';
import { ExtratoComponent } from './componentes/extrato/extrato.component';
import { SaqueComponent } from './componentes/saque/saque.component';
import { TransferenciaComponent } from './componentes/transferencia/transferencia.component';
import { PainelListaComponent } from './paginas/lista/painel-lista.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
    imports: [
        PainelRoutingModule,
        CommonModule,
        AppShareModule,
        FormsModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [
        DepositoComponent,
        ExtratoComponent,
        SaqueComponent,
        TransferenciaComponent,
        PainelListaComponent
    ]
})
export class PainelModule { }
