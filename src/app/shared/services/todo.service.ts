import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './../interfaces/article.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // key api of newsapi.org
  apiKey = 'c44c3e067780404892e73626080f7fb9';

  constructor(private http: HttpClient) { }

  getTotos(): Observable<News> {
    return this.http.get<News>(`http://newsapi.org/v2/top-headlines?country=ua&pageSize=6&apiKey=${this.apiKey}`);
  }
}
