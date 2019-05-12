import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdalService } from 'adal-angular4';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: adal.User = null;
  isLoginSubject = new BehaviorSubject<adal.User>(this.user);

  private _isLoggedIn = false;
  get isLoggedIn() {
    return this._isLoggedIn;
  }
  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
    this.adalSvc.getUser().subscribe(user => {
      this.user = user;
      this.isLoginSubject.next(this.user);
    });
  }

  constructor(private adalSvc: AdalService) {}
}
