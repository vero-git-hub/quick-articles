import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule} from '@angular/material/card';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage } from "@angular/material/card";
import { MatButton } from "@angular/material/button";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
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
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'quick-articles';

  articles = [
    { date: 'May 28th, 2021', title: 'Healthcare updates', content: 'Non sed IT companies tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { date: 'June 5th, 2021', title: 'Tech trends', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { date: 'July 12th, 2021', title: 'Market analysis', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { date: 'August 19th, 2021', title: 'Financial news', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { date: 'September 25th, 2021', title: 'New policies', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
  ];

  numberOfArticles = this.articles.length;
}
