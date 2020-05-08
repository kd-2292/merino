import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PastwebinarComponent } from './pastwebinar/pastwebinar.component';



const routes: Routes = [
  { path: 'list.html', component: ListComponent},
  { path: 'past/:slug', component: PastwebinarComponent},
  { path: 'thank-you.html', component: ThankYouComponent },
  { path: ':slug', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebinarsRoutingModule { }
