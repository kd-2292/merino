import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [

  // { path: '', component: LandingComponent },
  { path: '', redirectTo: 'all-services.html', pathMatch: 'full' },
  { path: ':slug', component: DetailComponent},
  { path: 'all-services.html', component: DetailComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }