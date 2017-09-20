import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostDataService} from './post-data.service';
import {HomeComponent} from './components/home/home.component';
import {PostCardComponent} from './components/post-card/post-card.component';
import {PostContentComponent} from './components/post-content/post-content.component';
import {NavbarComponent} from './components/navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: PostListComponent},
  {path: 'blog/:id', component: PostContentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    PostCardComponent,
    PostContentComponent,
    NavbarComponent
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
export class AppModule {
}
