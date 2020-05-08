import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { ChairmanComponent } from './chairman/chairman.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { SharedModule } from './../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [CompanyComponent, ChairmanComponent, ManagementTeamComponent, GlobalPresenceComponent, VisionMissionComponent ],
  imports: [
    CommonModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class AboutusModule { }
