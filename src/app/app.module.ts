import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppShareModule } from './app-share.module';
import { MenuComponent } from './modulos/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modulos/home/home.component';
import { NotificacaoComponent } from './shared/componentes/notificacao/notificacao.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        NotificacaoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppShareModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { 
}
