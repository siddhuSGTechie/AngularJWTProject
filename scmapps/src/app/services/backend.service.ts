import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BackendAuthService } from './backend-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  API_URL ="http://localhost:9092" ;
  reqHeaders = new HttpHeaders({"No-Auth": "True"}) ;

  constructor(private httpClient: HttpClient, private backendAuthService : BackendAuthService) { }

  loginFunction(loginData: any){
    return this.httpClient.post(this.API_URL+"/authenticate",loginData,{headers: this.reqHeaders})
  }

  register(regData: any){
    return this.httpClient.post(this.API_URL+"/createNewUser",regData,{headers: this.reqHeaders})
  }

  getUser(): Observable<any[]>{
    return this.httpClient.get<any>(this.API_URL+"/getAllUser",{headers: this.reqHeaders}) ;
  }

  public roleMatch(allowedRoles : any) : boolean{

    const existRoles : any = this.backendAuthService.getRoles() ;
    console.log("Exist Roles : ", existRoles);
    let isMatch = false ;
    for(let i = 0; i< existRoles.length ; i++){
      for(let j = 0; j < allowedRoles.length ; j++){
         if(existRoles[i].role === allowedRoles[j]){
          isMatch = true ;
         }
      }
    }
    
   return isMatch ;

  }

  // public roleMatches(allowedRoles: any): boolean {
  //   let isMatch = false ;
  //   const userRoles : any = this.backendAuthService.getRoles() ;

  //   if(userRoles != null && userRoles){

  //     for (let i=0 ; i < userRoles.length; i++){
  //       for (let j=0 ; j < allowedRoles.length; i++){

  //         if(userRoles[i].roleName === allowedRoles[j]){
  //           isMatch = true ;
  //           return isMatch ;
  //         }else{
  //           return isMatch ;
  //         }
  //       }
  //     }
  //   }

  //   return isMatch ;
  // }
}
