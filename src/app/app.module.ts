import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ToppageComponent } from './toppage/toppage.component';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { CareersComponent } from './careers/careers.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ToppageComponent,
    ArticleIndexComponent,
    CareersComponent,
    ArticlesComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
