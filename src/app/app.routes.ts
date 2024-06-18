import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent }
];
