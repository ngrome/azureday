import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  isAuthenticated = false;

  constructor(private adalService: AdalService, private authService: AuthService) {
    this.isAuthenticated = this.adalService.userInfo.authenticated;
  }

  ngOnInit() {
    if (this.isAuthenticated) {
      this.adalService.logOut();
    }
    this.authService.logout();
  }
}
