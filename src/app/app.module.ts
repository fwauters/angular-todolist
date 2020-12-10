import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TodolistComponent } from './views/todolist/todolist.component';
import { TaskComponent } from './views/task/task.component';
import { AddTaskFormComponent } from './views/add-task-form/add-task-form.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TodolistComponent,
    TaskComponent,
    AddTaskFormComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent
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
