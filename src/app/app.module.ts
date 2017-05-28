import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDataService } from './post-data.service';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { IndexBannerComponent } from './index-banner/index-banner.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsBannerComponent } from './contact-us-banner/contact-us-banner.component';
import { HomeComponent } from './home/home.component';
import { BlogStartComponent } from './blog-start/blog-start.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostContentComponent } from './post-content/post-content.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogStartComponent},
  {path: 'blog/:id', component: PostContentComponent}
];

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
    ContactUsBannerComponent,
    HomeComponent,
    BlogStartComponent,
    PostCardComponent,
    PostContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
