import { Component, OnInit } from '@angular/core';

import { TodolistService } from '../../controllers/todolist.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  newTask: string;
  user = sessionStorage.getItem('user');

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {

  }

  sendTask() {
    let id = this.todolistService.generateId();
    this.todolistService.addTask(this.user, Number(id), this.newTask);
  }
}
