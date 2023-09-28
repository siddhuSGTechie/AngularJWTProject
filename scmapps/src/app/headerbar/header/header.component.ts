import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BackendAuthService } from 'src/app/services/backend-auth.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndAuthService : BackendAuthService, public backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
   return this.backEndAuthService.isLoggedin() ;
  }

  public logout(){
    this.backEndAuthService.clear();
    this.router.navigate(['/home']) ;
  }
}
