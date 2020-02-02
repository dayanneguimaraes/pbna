import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modulos/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'agencia',
                loadChildren: () => import('./modulos/agencia/agencia.module').then(mod => mod.AgenciaModule),
            },
            {
                path: 'cliente',
                loadChildren: () => import('./modulos/cliente/cliente.module').then(mod => mod.ClienteModule),
            },
            {
                path: 'operacoes-bancarias',
                loadChildren: () => import('./modulos/painel/painel.module').then(mod => mod.PainelModule),
            }
        ]
    },
    {
        path: '**', redirectTo: '/agencia', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
