import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdalService } from 'adal-angular4';

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
  ) {}

  ngOnInit() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.adalSvc.userInfo.authenticated) {
      this.router.navigate([returnUrl]);
    } else {
      this.adalSvc.login();
    }
  }
}
