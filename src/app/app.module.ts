import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { PessoaService } from './pessoa/pessoa.service';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PessoaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[ 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, 
    PessoaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
