import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDataService } from './post-data.service';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexBannerComponent } from './components/index-banner/index-banner.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsBannerComponent } from './components/contact-us-banner/contact-us-banner.component';
import { HomeComponent } from './components/home/home.component';
import { BlogStartComponent } from './components/blog-start/blog-start.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostContentComponent } from './components/post-content/post-content.component';

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
