import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTodolistService {

  todolist: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  getList() {
    this.todolist = this.db.collection('todolist').valueChanges();
  }
}