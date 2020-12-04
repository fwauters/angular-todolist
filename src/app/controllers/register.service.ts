import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private db: AngularFirestore) { }

  newUser(firstname, lastname, email, password) {
    this.db.collection('users').doc(email).set(
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      }
    ).then(() => {
      console.log('User sucessfully added to the DB !');
      sessionStorage.setItem('isLogged', 'true');
      sessionStorage.setItem('user', email);
      window.location.replace("/dashboard");
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }
}