import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "../_services/token-storage.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({ 
            setHeaders: {
                'Access-Control-Allow-Origin': '*'
                //'Authorization': `Bearer ${this.token.getToken()}`
            }
        });
        return next.handle(req);
    }
}
