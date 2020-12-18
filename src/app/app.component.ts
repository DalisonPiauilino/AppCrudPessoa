import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username?: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    private _appService: AppService
  ) { }

  ngOnInit(): void {
    console.log(this._appService.isLoggedIn);
    this._appService.IsLoggedIn.emit(!!this.tokenStorageService.getToken());

    if (this._appService.isLoggedIn) {
      // const user = this.tokenStorageService.getUser();

      // this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}