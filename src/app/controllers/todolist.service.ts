import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Task } from '../models/task';
import { TimestampService } from './timestamp.service';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(
    private db: AngularFirestore,
    private timestampService: TimestampService) { }

  generateId() {
    let id = this.timestampService.getNow(false);
    return id;
  }

  getList(user: string): Observable<any[]> {
    return this.db.collection('users').doc(user).collection('todolist').valueChanges();
  }

  addTask(user: string, id: number, task: string) {
    this.db.collection('users').doc(user).collection('todolist').doc(id.toString()).set(
      {
        createdAt: this.timestampService.getNow(true),
        isDone: false,
        task: task,
        timeStamp: id
      }
    ).then(() => {
      console.log('Task sucessfully added to the DB !');
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  deleteTask(user: string, id: number) {
    this.db.collection('users').doc(user).collection('todolist').doc(id.toString()).delete()
    .then(() => {
      console.log('Task sucessfully deleted from the DB !');
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  updateTask(user: string, task: Task) {
    this.db.collection('users').doc(user).collection('todolist').doc(task.timeStamp.toString()).set(
      {
        createdAt: task.createdAt,
        isDone: task.isDone,
        task: task.task,
        timeStamp: task.timeStamp
      }
    ).then(() => {
      console.log('Task sucessfully updated in the DB !');
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }
}