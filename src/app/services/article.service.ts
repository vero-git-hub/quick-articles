import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v3/articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any[]> {
    // console.log('Fetching articles from API');
    return this.http.get<any[]>(this.apiUrl);
  }

  getArticleById(id: number): Observable<any> {
    // console.log(`Fetching article with ID: ${id}`);
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
