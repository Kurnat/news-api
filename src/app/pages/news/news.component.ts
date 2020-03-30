import { Article, News } from 'app/shared/interfaces/article.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'app/shared/services/todo.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  news$: Subscription;
  response: Article[];
  // if no news image
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxFBbhbJMlrG8K6sXRSR6cJjbvXZNNzm1swrkZR6p19P-juz5D';

  // error object to show if something went wrong
  error = {
    massage: null,
    status: null
  };
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // get news
    this.news$ = this.todoService.getTotos().subscribe((res: News): void =>  { this.response = res.articles; },
    error => {
      this.error.massage = error.message;
      this.error.status = error.status;
     });
  }

  ngOnDestroy(): void {
    this.news$.unsubscribe();
  }

}
