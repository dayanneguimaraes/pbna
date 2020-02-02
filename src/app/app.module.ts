import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppShareModule } from './app-share.module';
import { MenuComponent } from './core/menu/menu.component';
import { AppInjectorService } from './shared/utils/app-injector.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modulos/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppShareModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(injector: Injector) {
        AppInjectorService.setInjector(injector);
    }
}
