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
import {FormsModule} from "@angular/forms";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  title = 'quick-articles';
  articles: any[] = [];
  filteredArticles: any[] = [];
  numberOfArticles = 0;
  searchKeyword = '';

  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // console.log('ngOnInit called');
    this.articleService.getArticles().pipe(
      tap(data => {
        // console.log('Articles fetched:', data);
        this.articles = data;
        this.filteredArticles = data;
        this.numberOfArticles = data.length;
        // console.log('Articles set:', this.articles);
      }),
      catchError(error => {
        console.error('Error fetching articles:', error);
        return of([]);
      })
    ).subscribe();
  }

  filterArticles(): void {
    if (this.searchKeyword) {
      const keyword = this.searchKeyword.toLowerCase();
      this.filteredArticles = this.articles.filter(article => {
        const titleContainsKeyword = article.title.toLowerCase().includes(keyword);
        const summaryContainsKeyword = article.summary.toLowerCase().includes(keyword);
        return titleContainsKeyword || summaryContainsKeyword;
      }).sort((a, b) => {
        const aTitleContains = a.title.toLowerCase().includes(keyword);
        const bTitleContains = b.title.toLowerCase().includes(keyword);
        if (aTitleContains && !bTitleContains) {
          return -1;
        } else if (!aTitleContains && bTitleContains) {
          return 1;
        } else {
          return 0;
        }
      });
      this.numberOfArticles = this.filteredArticles.length;
    } else {
      this.filteredArticles = this.articles;
      this.numberOfArticles = this.articles.length;
    }
  }

  highlightKeyword(text: string): SafeHtml {
    if (!this.searchKeyword) {
      return text;
    }
    const keyword = this.searchKeyword.toLowerCase();
    const regex = new RegExp(`(${keyword})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
