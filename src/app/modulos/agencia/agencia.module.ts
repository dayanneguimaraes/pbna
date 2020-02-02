import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from 'src/app/app-share.module';
import { FormsModule } from '@angular/forms';
import { AgenciaRoutingModule } from './agencia-routing.module';
import { AgenciaListaComponent } from './paginas/lista/agencia-lista.component';
import { AgenciaCadastroComponent } from './paginas/cadastro/agencia-cadastro.component';

@NgModule({
  imports: [
    AgenciaRoutingModule,
    CommonModule,
    AppShareModule,
    FormsModule,
  ],
  declarations: [
      AgenciaCadastroComponent,
      AgenciaListaComponent
  ]
})
export class AgenciaModule { }
