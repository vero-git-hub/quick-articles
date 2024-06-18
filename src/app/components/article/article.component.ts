import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSuffix } from "@angular/material/form-field";
import { RouterModule } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSuffix,
    RouterModule
  ],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    const articleId = +this.route.snapshot.paramMap.get('id')!;
    this.articleService.getArticleById(articleId).pipe(
      tap(data => {
        // console.log('Article fetched:', data);
        this.article = data;
      }),
      catchError(error => {
        console.error(`Error fetching article with ID ${articleId}:`, error);
        return of(null);
      })
    ).subscribe();
  }
}
