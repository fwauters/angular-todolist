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
  isLogged = sessionStorage.getItem('isLogged');
  user = sessionStorage.getItem('user');

  constructor(private todolistService: TodolistService) { }

  ngOnInit() {
    if (this.user) {
      this.getTodolist();
    }
  }

  getTodolist() {
    this.todolistService.getList(this.user).subscribe(data => {
      this.todolist = data;
    });
  }

  onSelect(task: Task) {
    this.selectedTask = task;
    document.getElementById("task").scrollIntoView({
      behavior: 'smooth'
    });
  }

  deleteElement(id: number) {
    this.todolistService.deleteTask(this.user, id);
  }
}
