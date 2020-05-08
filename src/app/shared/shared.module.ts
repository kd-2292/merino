import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { KnowMoreComponent } from './know-more/know-more.component';
import { PdfFormComponent } from './pdf-form/pdf-form.component';
import { WatchvideoComponent } from './watchvideo/watchvideo.component';




@NgModule({
  declarations: [RequestDemoComponent, KnowMoreComponent, PdfFormComponent, WatchvideoComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule

  ],
  exports: [RequestDemoComponent, KnowMoreComponent, PdfFormComponent, WatchvideoComponent]
})
export class SharedModule { }
