import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private adalConfiguration = {
    tenant: '80d52e66-f704-4cdf-8792-c6abd656a889',
    clientId: '6508a49b-3faa-463a-b252-353a4398de4f',
    redirectUri: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200',
  };

  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfiguration);
  }
}
