import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// este é o cara que vai permitir fazer conexões para construir webservices
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { BuscaComponent } from './busca/busca.component';
import { TituloComponent } from './titulo/titulo.component';
import { OutletComponent } from './outlet/outlet.component';
import { MenuComponent } from './menu/menu.component';
import { CorpoComponent } from './corpo/corpo.component';
import { HttpClient } from 'selenium-webdriver/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarefasComponent,
    BuscaComponent,
    TituloComponent,
    OutletComponent,
    MenuComponent,
    CorpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
