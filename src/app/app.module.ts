import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { DataTableModule } from "angular2-datatable";

import { MembreService } from './membres/membre.service';
import { ClausService } from './claus/claus.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MembresComponent } from './membres/membres.component';
import { MembreListComponent } from './membres/membre-list/membre-list.component';
import { MembreDetallComponent } from './membres/membre-detall/membre-detall.component';
import { MembreEditComponent } from './membres/membre-edit/membre-edit.component';
import { ClausComponent } from './claus/claus.component';
import { ClauListComponent } from './claus/clau-list/clau-list.component';
import { ClauDetallComponent } from './claus/clau-detall/clau-detall.component';
import { ClauItemComponent } from './claus/clau-list/clau-item/clau-item.component';
import { ClauEditComponent } from './claus/clau-edit/clau-edit.component';
import { AlertAssignarClauComponent } from './claus/clau-list/clau-item/modal-assignar-clau-item.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MembreItemComponent } from './membres/membre-item/membre-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlertComponent } from './shared/modal/alert/alert.component';
import { ConfirmComponent } from './shared/modal/confirm/confirm.component';
import { DropDownSelectModalComponent } from './shared/modal/dropdown-select-modal/dropdown-select-modal.component';
import { AlertMessageComponent } from './shared/alert-message/alert-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembresComponent,
    MembreListComponent,
    MembreDetallComponent,
    ClausComponent,
    ClauListComponent,
    ClauDetallComponent,
    ClauItemComponent,
    ClauEditComponent,
    MembreEditComponent,
    AlertAssignarClauComponent,
    SignupComponent,
    SigninComponent,
    MembreItemComponent,
    NotFoundComponent,
    AlertComponent,
    ConfirmComponent,
    DropDownSelectModalComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BootstrapModalModule,
    DataTableModule
  ],
  providers: [ClausService, MembreService, AuthService, AuthGuard, DataService],
  entryComponents: [
    AlertAssignarClauComponent,
    AlertComponent,
    ConfirmComponent,
    DropDownSelectModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
