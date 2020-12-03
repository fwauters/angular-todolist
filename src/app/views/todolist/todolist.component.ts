import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/models/task';
import { TodolistService } from '../../controllers/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: Task[];
  selectedTask: Task;

  constructor(private todolistService: TodolistService) { }

  ngOnInit() {
    this.getTodolist();
  }

  getTodolist() {
    this.todolistService.getList().subscribe(data => {
      console.log(data);
      this.todolist = data;
    });
  }

  onSelect(task: Task) {
    this.selectedTask = task;
  }

  deleteElement(id: number) {
    this.todolistService.deleteTask(id);
  }
}
