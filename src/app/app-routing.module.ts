import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToppageComponent } from './toppage/toppage.component';
import { AboutComponent } from './about/about.component';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { ArticlesComponent } from './articles/articles.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: ToppageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article_index', component: ArticleIndexComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact_us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
