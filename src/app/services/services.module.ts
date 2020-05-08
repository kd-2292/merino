import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [DetailComponent, FooterComponent, LandingComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]

})
export class ServicesModule { }
