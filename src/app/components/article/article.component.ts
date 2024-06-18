import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSuffix } from "@angular/material/form-field";
import { RouterModule } from '@angular/router';

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
  articleId!: number;
  article: any;

  articles = [
    { id: 1, date: 'May 28th, 2021', title: 'Healthcare updates', content: 'Detailed content for Healthcare updates...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: 2, date: 'June 5th, 2021', title: 'Tech trends', content: 'Detailed content for Tech trends...', image: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    { id: 3, date: 'July 12th, 2021', title: 'Market analysis', content: 'Detailed content for Market analysis...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: 4, date: 'August 19th, 2021', title: 'Financial news', content: 'Detailed content for Financial news...', image: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },
    { id: 5, date: 'September 25th, 2021', title: 'New policies', content: 'Detailed content for New policies...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleId = +this.route.snapshot.paramMap.get('id')!;
    this.article = this.articles.find(a => a.id === this.articleId);
  }
}
