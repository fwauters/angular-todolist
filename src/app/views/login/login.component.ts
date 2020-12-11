import { Component, OnInit } from '@angular/core';

import { LogService } from '../../controllers/log.service';
import { HashService } from '../../controllers/hash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = sessionStorage.getItem('isLogged');
  email: string;
  password: string;
  data: any;
  errorMsg: string;

  constructor(
    private logService: LogService,
    private hashService: HashService) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.logService.getUsers(this.email).subscribe(data => {
      this.data = data;
      if (data === undefined) {
        console.log('Cant find email...');
        this.errorMsg = 'This email is not registered';
      }
      else {
        let check = this.hashService.compare(this.password, this.data.password);
        if (check === true) {
          console.log('User sucessfully connected !');
          sessionStorage.setItem('isLogged', 'true');
          sessionStorage.setItem('user', this.email);
          sessionStorage.setItem('firstname', this.data.firstname);
          window.location.replace('/');
        }
        else {
          console.log('Wrong password...');
          this.errorMsg = "The password doesn't match";
        }
      }
    });
  }
}
