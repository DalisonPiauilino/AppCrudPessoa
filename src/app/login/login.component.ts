import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private _router: Router,
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    public _appService: AppService
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log('1:',this.tokenStorage.getToken());
      this._appService.IsLoggedIn.emit(true);
      this._router.navigate(['home']);
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);

        this.isLoginFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
