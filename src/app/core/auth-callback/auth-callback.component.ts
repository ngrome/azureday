import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { map, tap } from 'rxjs/operators';

@Component({
  templateUrl: './auth-callback.component.html',
})
export class AuthCallbackComponent implements OnInit {
  constructor(private adal: AdalService, private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.adal.handleWindowCallback();
    this.adal
      .getUser()
      .pipe(
        map(user => this.auth.login(user)),
        tap(() => this.router.navigate(['/dashboard'])),
      )
      .subscribe();
  }
}
