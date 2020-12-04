import { Component, OnInit } from '@angular/core';

import { LogService } from '../../controllers/log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = sessionStorage.getItem('isLogged');

  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }

  userLogout() {
    this.logService.logout();
  }

}
