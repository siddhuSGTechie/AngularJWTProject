import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendAuthService } from '../services/backend-auth.service';
import { BackendService } from '../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendAuthGuard implements CanActivate {

    constructor(private backendAuthService: BackendAuthService, private backendService: BackendService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.backendAuthService.getRoles !== null){
          const role =  route.data['roles'] as Array<string> ;

          if(role){
              const match = this.backendService.roleMatch(role) ;

              if(match){
                return true ;
              }else{
                this.router.navigate(['/forbidden']) ;
                return false ;
              }
          }

      }
      this.router.navigate(['/login']) ;
    return true;
  }
}
