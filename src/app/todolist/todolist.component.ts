import { Component, OnInit } from '@angular/core';

import { GetTodolistService } from '../get-todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist: void[] = [];

  constructor(private getTodolistService: GetTodolistService) { }

  ngOnInit() {
    this.getTodolist();
  }

  getTodolist() {
    let data = this.getTodolistService.getList();
    this.todolist.push(data);
  }
}
