import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { GetTodolistService } from '../get-todolist.service';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: Observable<any[]>;
  selectedTask: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.getTodolist();
  }

  getTodolist() {
    this.todolist = this.db.collection('todolist').valueChanges();
  }

  onSelect(task): void {
    this.selectedTask = task;
  }

  getDate(unixTime) {
    const date = new Date(unixTime*1000);
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear() - 1969;
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return day + "/" + month + "/" + year + " at " + hour + ":" + minutes;
  }
}
