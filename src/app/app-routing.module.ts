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

const appRoutes: Routes = [
  { path: '',  redirectTo: '/claus', pathMatch: 'full' },
  {
    path: 'membres', component: MembresComponent, children:[
      { path: '', component: MembreListComponent, pathMatch: 'full' },
      { path: ':id', component: MembreDetallComponent },
      { path: ':id/edit', component: MembreEditComponent }
    ] },
  {
    path: 'claus', component: ClausComponent, children: [
      { path: '', component: ClauListComponent, pathMatch: 'full' },
      { path: ':id', component: ClauDetallComponent },
      { path: ':id/edit', component: ClauEditComponent }
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
