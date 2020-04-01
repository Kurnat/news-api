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
  // tslint:disable-next-line:no-output-on-prefix


  news$: Subscription;
  // news page
  p = 1;
  // Array with news article
  collection: Article[] = [];
  isAdmin: boolean | null = false;




  constructor(public todoService: TodoService) { }


  ngOnInit(): void {
    this.fechTodos();
    this.isAdmin = JSON.parse(localStorage.getItem('testAuth'));
  }

  // get news from server
  fechTodos() {
    // this.todoService.response is a array of news
    this.news$ = this.todoService.getTotos().subscribe((res: News): void => {
      this.todoService.response = res;
    },
      //  this.todoService.error object this is a message object to show if something went wrong
      error => {
        this.todoService.error.message = error.message;
        this.todoService.error.status = error.status;
      });
  }

  onActivate(event) {

  }

  pageChanged(event) {
    this.todoService.page = event;
    this.fechTodos();
  }

  ngOnDestroy(): void {
    this.news$.unsubscribe();
  }

}
