import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('testAuth') === null) {
      localStorage.setItem('testAuth', 'false');
    }

  }
}
