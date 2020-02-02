import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClienteListaComponent } from './paginas/lista/cliente-lista.component';
import { ClienteCadastroComponent } from './paginas/cadastro/cliente-cadastro.component';

const routes: Routes = [
    {
        path: '',
        component: ClienteListaComponent
    },
    {
        path: 'cadastro',
        component: ClienteCadastroComponent
    },
    {
        path: 'edicao',
        component: ClienteCadastroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClienteRoutingModule { }