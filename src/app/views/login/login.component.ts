import { Component, OnInit } from '@angular/core';

import { LogService } from '../../controllers/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.logService.login(this.email, this.password);
  }

}
