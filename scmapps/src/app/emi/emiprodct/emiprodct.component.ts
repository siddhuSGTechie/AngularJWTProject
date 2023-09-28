import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-emiprodct',
  templateUrl: './emiprodct.component.html',
  styleUrls: ['./emiprodct.component.css']
})

export class EmiprodctComponent implements OnInit {
  cityList: any;

  constructor(private backendService : BackendService) { }

  ngOnInit(): void {
    
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
  }

}
