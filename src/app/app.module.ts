import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TaskComponent } from './task/task.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    TodolistComponent,
    DashboardComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
