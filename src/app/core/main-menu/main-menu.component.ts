import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  isLoggedIn: boolean;
  user: adal.User = null;

  constructor(private adalSvc: AdalService, private auth: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.adalSvc.userInfo.authenticated;
    this.auth.isLoginSubject.subscribe(user => {
      if (user) {
        this.user = user ? user : null;
        this.isLoggedIn = user ? true : false;
      }
    });
  }
}
