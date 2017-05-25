import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostDataService} from "./post-data.service";
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { IndexBannerComponent } from './index-banner/index-banner.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsBannerComponent } from './contact-us-banner/contact-us-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavComponent,
    FooterComponent,
    IndexBannerComponent,
    AboutSectionComponent,
    AboutBannerComponent,
    ContactUsComponent,
    ContactUsBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PostDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
