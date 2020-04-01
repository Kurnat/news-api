import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './../interfaces/article.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // params for newsapi.org
  apiKey = 'c44c3e067780404892e73626080f7fb9';

  pageSize = '5';
  country = 'ua';
  category = 'general';
  page = '1';

  // if article doesn't had news image URL
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxFBbhbJMlrG8K6sXRSR6cJjbvXZNNzm1swrkZR6p19P-juz5D';

  response: News;

  // error object this is a message object to show if something went wrong
  error = {
    message: null,
    status: null
  };

  constructor(private http: HttpClient) { }

  getTotos(): Observable<News> {
    return this.http.get<News>(
      // tslint:disable-next-line:max-line-length
      `http://newsapi.org/v2/top-headlines?country=${this.country}&page=${this.page}&pageSize=${this.pageSize}&category=${this.category}&apiKey=${this.apiKey}`);
  }
}
