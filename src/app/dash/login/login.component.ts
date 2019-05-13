import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdalService } from 'adal-angular4';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adalSvc: AdalService,
    private authSvc: AuthService,
  ) {}

  ngOnInit() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    if (this.adalSvc.userInfo.authenticated && this.authSvc.isLogged()) {
      this.router.navigate([returnUrl]);
    } else {
      this.adalSvc.login();
    }
  }
}
