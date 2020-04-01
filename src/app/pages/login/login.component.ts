import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable, Subscription } from 'rxjs';
import { AuthService } from './../../shared/services/auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  incorectValues = false;
  users: Observable<any[]>;

  form: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  auth$: Subscription;

  // keep a value of the authorization from Firebase
  permission: {password: string, username: string};



  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase,
    private route: Router) {
    this.users = this.db.list('users').valueChanges();
  }

  ngOnInit(): void {
    // get password and username from firabase
    this.auth$ = this.users.subscribe((val) => {
      console.log(val);
      this.permission = val[0];
    });
  }

  onSubmit(form) {
    // check permission for authorization
    if (form.value.username === this.permission.username && form.value.password === this.permission.password) {

      // save authorization in localStorage
      this.authService.setAdminPermission(true);
      this.route.navigate(['/profile']);

      // if input is valid
      this.incorectValues = false;
      this.form.reset();
    } else {
      // if input is invalid
      this.incorectValues = true;
      this.authService.setAdminPermission(false);
    }
  }

  ngOnDestroy(): void {
    this.auth$.unsubscribe();
  }
}
