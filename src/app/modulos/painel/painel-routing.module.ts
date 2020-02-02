import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PainelListaComponent } from './paginas/lista/painel-lista.component';
import { DepositoComponent } from './componentes/deposito/deposito.component';
import { ExtratoComponent } from './componentes/extrato/extrato.component';
import { SaqueComponent } from './componentes/saque/saque.component';
import { TransferenciaComponent } from './componentes/transferencia/transferencia.component';



const routes: Routes = [
    {
        path: '',
        component: PainelListaComponent,
    },
    {
        path: 'deposito',
        component: DepositoComponent
    },
    {
        path: 'extrato',
        component: ExtratoComponent
    },
    {
        path: 'saque',
        component: SaqueComponent
    },
    {
        path: 'transferencia',
        component: TransferenciaComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PainelRoutingModule { }