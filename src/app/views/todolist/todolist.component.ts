import { Component, OnInit } from '@angular/core';

import { TodolistService } from '../../controllers/todolist.service';
import { TimestampService } from '../../controllers/timestamp.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: any;
  selectedTask: any;

  constructor(
    private todolistService: TodolistService,
    private timestampService: TimestampService) { }

  ngOnInit() {
    this.getTodolist();
    console.log(this.timestampService.getNow(true));
  }

  getTodolist() {
    this.todolistService.getList().subscribe(data => {
      this.todolist = data;
      console.log(data);
    });
  }

  formatDate(timestamp) {
    return this.timestampService.formatStamp(timestamp);
  }

  onSelect(task): void {
    this.selectedTask = task;
  }
}
