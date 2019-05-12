import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdalService } from 'adal-angular4';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // user: adal.User = null;
  // _isLoginSubject$: BehaviorSubject<adal.User>;
  // *
  private currentUserSubject: BehaviorSubject<adal.User>;
  public currentUser: Observable<adal.User>;
  /*private _isLoggedIn = false;

  get isLoginSubject() {
    return this._isLoginSubject$.asObservable();
  }

  login(value: boolean) {
    this._isLoggedIn = value;
    this.adalSvc.getUser().subscribe((user: adal.User) => {
      console.log('LOGGGGIN');
      this.user = user;
      this._isLoginSubject$.next(this.user);
    });
  }

  logout() {
    this._isLoginSubject$.next(null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
*/
  login(user: adal.User) {
    localStorage.setItem('currentUser', JSON.stringify(user));

    this.currentUserSubject.next(user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    this.currentUserSubject.next(null);
  }

  isLogged() {
    // return localStorage.getItem('currentUser');
    if (this.adalSvc.userInfo.authenticated && localStorage.getItem('currentUser')) {
      // this.authSvc.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  constructor(private adalSvc: AdalService) {
    // this._isLoginSubject$ = new BehaviorSubject(null);
    // *
    this.currentUserSubject = new BehaviorSubject<adal.User>(
      JSON.parse(localStorage.getItem('currentUser')),
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
}
