import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _isLoggedIn: boolean;
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
  public IsLoggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.IsLoggedIn.subscribe(value => { this.isLoggedIn = value; });
  }
}
