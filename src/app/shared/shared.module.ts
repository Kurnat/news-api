// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

// Components
import { environment } from 'environments/environment';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Firebase
    AngularFireDatabaseModule,

  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    AngularFirestore,
  ]
})
export class SharedModule { }
