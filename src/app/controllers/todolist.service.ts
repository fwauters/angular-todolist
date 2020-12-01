import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { TimestampService } from './timestamp.service';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(
    private db: AngularFirestore,
    private timestampService: TimestampService) { }

  getList(): Observable<any[]> {
    return this.db.collection('todolist').valueChanges();
  }

  addTask(id: number, task: string): any {
    this.db.collection('todolist').doc(id.toString()).set(
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

  generateId() {
    let id = this.timestampService.getNow(false);
    return id;
  }

  deleteTask(id: number) {
    this.db.collection('todolist').doc(id.toString()).delete()
    .then(() => {
      console.log('Task sucessfully deleted from the DB !');
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }
}