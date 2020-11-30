import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetTodolistService {

  constructor(private db: AngularFirestore) { }

  getList() {
    const getTodolist = this.db.collection('todolist').valueChanges();
    getTodolist.subscribe(console.log);
  }
}