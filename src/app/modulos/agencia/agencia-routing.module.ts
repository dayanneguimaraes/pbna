import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgenciaListaComponent } from './paginas/lista/agencia-lista.component';
import { AgenciaCadastroComponent } from './paginas/cadastro/agencia-cadastro.component';


const routes: Routes = [
    {
        path: '',
        component: AgenciaListaComponent
    },
    {
        path: 'cadastro',
        component: AgenciaCadastroComponent
    },
    {
        path: 'edicao/:codigoAgencia',
        component: AgenciaCadastroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AgenciaRoutingModule { }