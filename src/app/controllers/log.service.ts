import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { HashService } from './hash.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  data;

  constructor(
    private db: AngularFirestore,
    private hashService: HashService) { }

  login(email, password) {
    let userData = this.db.collection('users').doc(email).valueChanges();
    userData.subscribe(data => {
      this.data = data;
      let check = this.hashService.compare(password, this.data.password);
      if (check === true) {
        console.log('User sucessfully connected !');
        sessionStorage.setItem('isLogged', 'true');
        sessionStorage.setItem('user', email);
        sessionStorage.setItem('firstname', this.data.firstname);
        window.location.replace('/dashboard');
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
