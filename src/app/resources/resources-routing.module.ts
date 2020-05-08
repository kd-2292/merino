import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { BrochureComponent } from './brochure/brochure.component';
import { PresentationsComponent } from './presentations/presentations.component';


const routes: Routes = [
  { path: 'casestudy.html', component: CasestudyComponent },
  { path: 'white-paper.html', component: WhitepaperComponent },
  { path: 'brochure.html', component: BrochureComponent },
  { path: 'presentations.html', component: PresentationsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
