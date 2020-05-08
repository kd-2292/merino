import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarsRoutingModule } from './webinars-routing.module';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { PastwebinarComponent } from './pastwebinar/pastwebinar.component';






@NgModule({
  declarations: [ListComponent, RegisterComponent, ThankYouComponent, PastwebinarComponent],
  imports: [
    CommonModule,
    WebinarsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class WebinarsModule { }
