import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from 'src/app/app-share.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClienteCadastroComponent } from './paginas/cadastro/cliente-cadastro.component';
import { ClienteListaComponent } from './paginas/lista/cliente-lista.component';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  imports: [
    ClienteRoutingModule,
    CommonModule,
    AppShareModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
      ClienteCadastroComponent,
      ClienteListaComponent
  ]
})
export class ClienteModule { }
