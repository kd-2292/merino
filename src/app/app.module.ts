import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogService } from './blog.service';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './common/menu/menu.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactUsComponent } from './common/contact-us/contact-us.component';
import { CareerComponent } from './common/career/career.component';
import { AboutFooterComponent } from './common/about-footer/about-footer.component';
import { ApplyOnlineComponent } from './common/apply-online/apply-online.component';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './common/search/search.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AllianceDetailComponent } from './common/alliance-detail/alliance-detail.component';
import { AllianceComponent } from './common/alliance/alliance.component';
import { ClientComponent } from './common/client/client.component';
import { ExpectBeyondComponent } from './common/expect-beyond/expect-beyond.component';
import { PrivacyPolicyComponent } from './common/privacy-policy/privacy-policy.component';
import { ThankYouComponent } from './common/thank-you/thank-you.component';
import { SitemapComponent } from './common/sitemap/sitemap.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';


// tslint:disable-next-line: quotemark
import { NgxSpinnerModule } from "ngx-spinner";
import { TextComponent } from './text/text.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MenuComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    CareerComponent,
    AboutFooterComponent,
    ApplyOnlineComponent,
    SearchComponent,
    SafeHtmlPipe,
    AllianceDetailComponent,
    AllianceComponent,
    ClientComponent,
    ExpectBeyondComponent,
    PrivacyPolicyComponent,
    ThankYouComponent,
    SitemapComponent,
    BlogComponent,
    BlogListComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AboutusModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
     BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
