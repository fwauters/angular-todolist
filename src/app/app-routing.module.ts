import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { TodolistComponent } from './views/todolist/todolist.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todolist', component: TodolistComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
