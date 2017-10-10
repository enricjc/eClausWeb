import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembresComponent } from './membres/membres.component';
import { ClausComponent } from './claus/claus.component';
import { ClauDetallComponent } from './claus/clau-detall/clau-detall.component';
import { ClauListComponent } from './claus/clau-list/clau-list.component';
import { ClauEditComponent } from './claus/clau-edit/clau-edit.component';

const appRoutes: Routes = [
  {path: '', component: MembresComponent},
  {path: 'membres', component: MembresComponent },
  {path: 'claus', component: ClausComponent, children:[
    { path: '', component: ClauListComponent, pathMatch:'full'},
    { path: ':id', component: ClauDetallComponent },
    { path: ':id/edit', component: ClauEditComponent }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
