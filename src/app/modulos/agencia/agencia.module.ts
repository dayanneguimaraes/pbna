import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from 'src/app/app-share.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgenciaRoutingModule } from './agencia-routing.module';
import { AgenciaListaComponent } from './paginas/lista/agencia-lista.component';
import { AgenciaCadastroComponent } from './paginas/cadastro/agencia-cadastro.component';

@NgModule({
  imports: [
    AgenciaRoutingModule,
    CommonModule,
    AppShareModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
      AgenciaCadastroComponent,
      AgenciaListaComponent
  ]
})
export class AgenciaModule { }
