import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from 'src/environments/environment';
import { AuthService } from './core/auth.service';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Azure Day - Angular Workshop';

  currentUser: adal.User;
  currentUserSubscription: Subscription;

  constructor(private adalService: AdalService, private authService: AuthService) {
    this.currentUserSubscription = this.authService.currentUser.pipe(delay(0)).subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.adalService.init(environment.config);
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }
}
