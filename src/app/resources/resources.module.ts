import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { BrochureComponent } from './brochure/brochure.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [CasestudyComponent, WhitepaperComponent, BrochureComponent, PresentationsComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    SharedModule
  ]
})
export class ResourcesModule { }
