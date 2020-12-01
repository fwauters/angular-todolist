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

  addTask(id, task): any {
    this.db.collection('todolist').doc(id).set(
      {
        createdAt: this.timestampService.getNow(true),
        isDone: false,
        task: task,
        timeStamp: this.timestampService.getNow(false)
      }
    ).then(() => {
      console.log('Task sucessfully added to the DB !');
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  generateId() {
    let id = this.timestampService.getNow(false).toString();
    return id;
  }
}