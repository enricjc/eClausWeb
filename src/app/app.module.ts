import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MembresComponent } from './membres/membres.component';
import { MembreListComponent } from './membres/membre-list/membre-list.component';
import { MembreDetallComponent } from './membres/membre-detall/membre-detall.component';
import { ClausComponent } from './claus/claus.component';
import { ClauListComponent } from './claus/clau-list/clau-list.component';
import { ClauDetallComponent } from './claus/clau-detall/clau-detall.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembresComponent,
    MembreListComponent,
    MembreDetallComponent,
    ClausComponent,
    ClauListComponent,
    ClauDetallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
