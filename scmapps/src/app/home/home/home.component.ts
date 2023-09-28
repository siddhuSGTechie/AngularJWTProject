import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendAuthService } from 'src/app/services/backend-auth.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private backendService : BackendService, private router: Router,private backendAuthService: BackendAuthService) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
   
    this.backendService.loginFunction(loginForm.value).subscribe(
      (response: any)=>{
        console.log("response from BE :  ", response);
        this.backendAuthService.setRoles(response.user.role);
        this.backendAuthService.setToken(response.jwtToken) ;

        const role = response.user.role[0].role ;
        this.router.navigate(['/admin']);
        
        if(role == 'Admin'){
          this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/user']);
        }
        
      },
      (error:HttpErrorResponse)=>{
        console.log(error) ;
      }
    );
  }
}
