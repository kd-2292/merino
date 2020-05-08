import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule , ExtraOptions } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { CompanyComponent } from './aboutus/company/company.component';
import { ChairmanComponent } from './aboutus/chairman/chairman.component';
import { VisionMissionComponent } from './aboutus/vision-mission/vision-mission.component';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { CareerComponent } from './common/career/career.component';
import { ApplyOnlineComponent } from './common/apply-online/apply-online.component';
import { SearchComponent } from './common/search/search.component';
import { AllianceDetailComponent } from './common/alliance-detail/alliance-detail.component';
import { AllianceComponent } from './common/alliance/alliance.component';
import { ClientComponent } from './common/client/client.component';
import { ExpectBeyondComponent } from './common/expect-beyond/expect-beyond.component';
import { PrivacyPolicyComponent } from './common/privacy-policy/privacy-policy.component';
import { ThankYouComponent } from './common/thank-you/thank-you.component';
import { SitemapComponent } from './common/sitemap/sitemap.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { TextComponent } from './text/text.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'webinar',
    loadChildren: './webinars/webinars.module#WebinarsModule'
  },
  {
    path: ':countryslug/webinar',
    loadChildren: './webinars/webinars.module#WebinarsModule'
  },
  {
    path: 'applications',
    loadChildren: './softwares/softwares.module#SoftwaresModule'
  },
  {
    path: ':countryslug/applications',
    loadChildren: './softwares/softwares.module#SoftwaresModule'
  },
  {
    path: 'services',
    loadChildren: './services/services.module#ServicesModule'
  },
  {
    path: ':countryslug/services',
    loadChildren: './services/services.module#ServicesModule'
  },
  {
    path: 'industries',
    loadChildren: './industries/industries.module#IndustriesModule'
  },
  {
    path: ':countryslug/industries',
    loadChildren: './industries/industries.module#IndustriesModule'
  },

  {
    path: 'resources',
    loadChildren: './resources/resources.module#ResourcesModule'
  },
  {
    path: ':countryslug/resources',
    loadChildren: './resources/resources.module#ResourcesModule'
  },
  {
    path: 'blog.html',
    component: BlogComponent
  },
  {
    path: 'blog/:slug',
    component: BlogListComponent
  },
  {
    path: 'contact-us.html',
    component: ContactUsComponent
  },
  {
    path: ':countryslug/contact-us.html',
    component: ContactUsComponent
  },

  {
    path: 'about-us.html',
    component: CompanyComponent
  },
  {
    path: ':countryslug/about-us.html',
    component: CompanyComponent
  },

  {
    path: 'director-message.html',
    component: ChairmanComponent
  },
  {
    path: ':countryslug/director-message.html',
    component: ChairmanComponent
  },
  {
    path: 'global-presence.html',
    component: VisionMissionComponent
  },
  {
    path: ':countryslug/global-presence.html',
    component: VisionMissionComponent
  },
  {
    path: 'alliances.html',
    component: AllianceComponent
  },
  {
    path: ':countryslug/alliances.html',
    component: AllianceComponent
  },
  {
    path: 'alliances/:slug',
    component: AllianceDetailComponent
  },
  {
    path: ':countryslug/alliances/:slug',
    component: AllianceDetailComponent
  },

  {
    path: 'careers.html',
    component: CareerComponent
  },
  {
    path: ':countryslug/careers.html',
    component: CareerComponent
  },
  {
    path: 'career/:slug/apply-online.html',
    component: ApplyOnlineComponent
  },
  {
    path: ':countryslug/career/:slug/apply-online.html',
    component: ApplyOnlineComponent
  },
  {
    path: 'search.html',
    component: SearchComponent
  },
  {
    path: ':countryslug/search.html',
    component: SearchComponent
  },
  {
    path: 'client.html',
    component: ClientComponent
  },
  {
    path: ':countryslug/client.html',
    component: ClientComponent
  },
  {
    path: 'expect-beyond.html',
    component: ExpectBeyondComponent
  },
  {
    path: ':countryslug/expect-beyond.html',
    component: ExpectBeyondComponent
  },
   {
    path: 'privacy-policy.html',
    component: PrivacyPolicyComponent
  },

  {
    path: ':countryslug/privacy-policy.html',
    component: PrivacyPolicyComponent
  },
   {
    path: 'sitemap.html',
    component: SitemapComponent
  },
  {
    path: 'thank-you.html',
    component: ThankYouComponent
  },
  {
    path: ':countryslug/thank-you.html',
    component: ThankYouComponent
  },
  {
    path: 'test.html',
    component: TextComponent
  },
  // {
  //   path: '**',
  //   loadChildren: './notFound/not-found/not-found.module#NotFoundModule'
  // },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //routerOptions,
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
