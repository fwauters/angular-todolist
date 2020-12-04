import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  data;

  constructor(private db: AngularFirestore) { }

  login(email, password) {
    let userData = this.db.collection('users').doc(email).valueChanges();
    userData.subscribe(data => {
      console.log(data);
      this.data = data;
      if (this.data.password === password) {
        console.log('User sucessfully connected !');
        sessionStorage.setItem('isLogged', 'true');
        sessionStorage.setItem('user', email);
        window.location.replace("/dashboard");
      }
      else {
        console.log('Wrong password !');
      }
    });
  }

  logout() {
    sessionStorage.clear();
    window.location.replace('/');
  }
}
