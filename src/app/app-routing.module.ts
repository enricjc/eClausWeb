import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembresComponent } from './membres/membres.component';
import { MembreListComponent } from './membres/membre-list/membre-list.component';
import { MembreDetallComponent } from './membres/membre-detall/membre-detall.component';
import { MembreEditComponent } from './membres/membre-edit/membre-edit.component';
import { ClausComponent } from './claus/claus.component';
import { ClauDetallComponent } from './claus/clau-detall/clau-detall.component';
import { ClauListComponent } from './claus/clau-list/clau-list.component';
import { ClauEditComponent } from './claus/clau-edit/clau-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '',  redirectTo: 'signup', pathMatch: 'full' },
  { path: 'api', redirectTo: '/404' },
  {
    path: 'membres', component: MembresComponent, canActivate: [AuthGuard], children:[
      { path: '', component: MembreListComponent, pathMatch: 'full' },
      { path: 'new', component: MembreEditComponent },
      { path: ':id', component: MembreDetallComponent },
      { path: ':id/edit', component: MembreEditComponent },
    ] },
  {
    path: 'claus', component: ClausComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ClauListComponent, pathMatch: 'full' },
      { path: ':id', component: ClauDetallComponent },
      { path: ':id/edit', component: ClauEditComponent },
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**',  redirectTo: '/404' },
  {path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
