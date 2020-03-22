import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Res, Article } from 'src/app/shared/interfaces/article.interface';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  // key api of newsapi.org
  apiKey = 'c44c3e067780404892e73626080f7fb9';
  news$: Subscription;
  response: Res;
  error = {
    massage: null,
    status: null
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.news$ = this.http.get<Res>(`http://newsapi.org/v2/top-headlines?country=ua&pageSize=6&apiKey=${this.apiKey}`)
      .subscribe((res) => this.response = res,
      error => {
        this.error.massage = error.message;
        this.error.status = error.status;
       });
  }

  ngOnDestroy(): void {
    this.news$.unsubscribe();
  }

}
