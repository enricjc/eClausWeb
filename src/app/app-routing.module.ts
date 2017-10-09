import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembresComponent } from './membres/membres.component';
import { ClausComponent } from './claus/claus.component';

const appRoutes: Routes = [
  {path: '', component: MembresComponent},
  {path: 'membres', component: MembresComponent },
  {path: 'claus', component: ClausComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
