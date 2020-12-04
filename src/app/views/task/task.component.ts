import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/models/task';
import { TodolistService } from '../../controllers/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  user = sessionStorage.getItem('user');

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
  }

  updateElement() {
    this.todolistService.updateTask(this.user, this.task);
  }
}
