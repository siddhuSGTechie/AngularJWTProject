import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { BackendAuthService } from "../services/backend-auth.service";


@Injectable()
export class AuthIntercepter implements HttpInterceptor{

    constructor(private backEndAuthService: BackendAuthService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(req.headers.get('No-Auth') === 'True'){
            return next.handle(req.clone()) ;
        }

        const token = this.backEndAuthService.getToken() ;
        req = this.addToken(req, token) ;


        return next.handle(req).pipe(
           catchError(
            (err: HttpErrorResponse)=>{
                console.log(err.status) ;
                if(err.status === 401){
                    this.router.navigate(['/home']) ;
                }else if(err.status === 403){
                    this.router.navigate(['/forbidden']) ;
                }

                return throwError("AuthIntercepter Saying Siddhu Something is went Wrong") ;
            }
           )
        ) ;
    }

    private addToken(httpRequest: HttpRequest<any>, token :string){
        return httpRequest.clone(
            {
                setHeaders:{
                    Authorization : `Bearer ,${token}`
                }
            }
        )
    }
}
