import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  cityList: any;

  constructor(private backendService : BackendService, private router: Router) { }

  ngOnInit(): void {

    console.log("AM ONINIT()") ;
    this.backendService.getUser().subscribe(
      (response: any)=>{
        console.log("DROP DOWN DB Response From Back End", response) ;
        this.cityList = response ;
      },
      (err: HttpErrorResponse)=>{
        console.log(err);
      }
    )
  }

  userReg(loginRegForm :NgForm){
    console.log("input Value : - ",loginRegForm.value) ;

    this.backendService.register(loginRegForm.value).subscribe(
      (response: any)=>{
        console.log("DB Response From Back End", response) ;
        if(response){
          this.router.navigate(['/admin']);
          loginRegForm.reset();
        }
      },
      (err: HttpErrorResponse)=>{
        console.log(err);
      }
      ) ;
  }

  reset(){
  }
}
