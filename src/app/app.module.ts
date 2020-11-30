import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TodolistComponent } from './todolist/todolist.component';

const firebaseConfig = {
  apiKey: "AIzaSyBB4Kq55nYCDkOl5o7Oq-g7h4CZctFJG0A",
  authDomain: "angular-todo-list-cbfd5.firebaseapp.com",
  databaseURL: "https://angular-todo-list-cbfd5.firebaseio.com",
  projectId: "angular-todo-list-cbfd5",
  storageBucket: "angular-todo-list-cbfd5.appspot.com",
  messagingSenderId: "252832156468",
  appId: "1:252832156468:web:3d08c7bb19710ba3d8f361"
};

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
