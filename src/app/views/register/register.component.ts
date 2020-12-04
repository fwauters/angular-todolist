import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../../controllers/register.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname;
  lastname;
  email;
  password;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.registerService.newUser(
      this.firstname,
      this.lastname,
      this.email,
      this.password
    );
  }

}
