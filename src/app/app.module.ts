import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MembresComponent } from './membres/membres.component';
import { MembreListComponent } from './membres/membre-list/membre-list.component';
import { MembreDetallComponent } from './membres/membre-detall/membre-detall.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembresComponent,
    MembreListComponent,
    MembreDetallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
