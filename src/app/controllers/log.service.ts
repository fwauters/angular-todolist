import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  data;
  errorMsg;

  constructor(private db: AngularFirestore) { }

  getUsers(email) {
    return this.db.collection('users').doc(email).valueChanges();
  }

  logout() {
    sessionStorage.clear();
    window.location.replace('/');
  }
}
