import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from '@angular/material/card';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { RouterModule } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatButton,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  title = 'quick-articles';
  articles: any[] = [];
  numberOfArticles = 0;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    // console.log('ngOnInit called');
    this.articleService.getArticles().pipe(
      tap(data => {
        // console.log('Articles fetched:', data);
        this.articles = data;
        this.numberOfArticles = data.length;
        // console.log('Articles set:', this.articles);
      }),
      catchError(error => {
        console.error('Error fetching articles:', error);
        return of([]);
      })
    ).subscribe();
  }
}
