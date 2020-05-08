import { DetailComponent } from './detail/detail.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

          // { path: '', component: LandingComponent },
          { path: '', redirectTo: 'all-software.html', pathMatch: 'full' },
          { path: ':slug', component: DetailComponent},
          { path: 'all-software.html', component: DetailComponent},
     ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwaresRoutingModule { }
