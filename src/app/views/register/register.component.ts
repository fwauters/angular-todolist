import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../../controllers/register.service';
import { HashService } from '../../controllers/hash.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogged = sessionStorage.getItem('isLogged');
  firstname: string;
  lastname: string;
  email: string;
  pass1: string;
  pass2: string;
  errorMsg: string;

  constructor(
    private registerService: RegisterService,
    private hashService: HashService) { }

  ngOnInit(): void {
  }

  registerUser() {
    let mailCheck = this.validateEmail(this.email);
    if (mailCheck) {
      if (this.pass1 === this.pass2) {
        this.registerService.newUser(
          this.firstname,
          this.lastname,
          this.email,
          this.hashService.hash(this.pass1)
        );
      }
      else {
        this.errorMsg = "You enter two differents passwords";
      }
    }
    else {
      this.errorMsg = "This email is not valid";
    }
  }

  validateEmail(email: string) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return (true)
    }
    else {return (false)}
  }

}
