import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './headerbar/header/header.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForbiddenComponent } from './forbidden/forbidden/forbidden.component';
import { BackendAuthGuard } from './auth/backend-auth.guard';
import { AuthIntercepter } from './auth/auth-intercepter';
import { BackendService } from './services/backend.service';
import { UserRegistrationComponent } from './usermanagement/user-registration/user-registration.component';
import { HelpdeskComponent } from './helpdesk/helpdesk/helpdesk.component';
import { ScmservicedeskComponent } from './helpdesk/scmservicedesk/scmservicedesk.component';
import { IdmaccessComponent } from './helpdesk/idmaccess/idmaccess.component';
import { AddsiteComponent } from './helpdesk/addsite/addsite.component';
import { ScmservicedeskhomeComponent } from './helpdesk/scmservicedeskhome/scmservicedeskhome.component';
import { THomeComponent } from './ticket_raise/t-home/t-home.component';
import { TSolutionsComponent } from './ticket_raise/t-solutions/t-solutions.component';
import { TTicketsComponent } from './ticket_raise/t-tickets/t-tickets.component';
import { TServicecatelogComponent } from './ticket_raise/t-servicecatelog/t-servicecatelog.component';
import { EmiprodctComponent } from './emi/emiprodct/emiprodct.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    ForbiddenComponent,
    UserRegistrationComponent,
    HelpdeskComponent,
    ScmservicedeskComponent,
    IdmaccessComponent,
    AddsiteComponent,
    ScmservicedeskhomeComponent,
    THomeComponent,
    TSolutionsComponent,
    TTicketsComponent,
    TServicecatelogComponent,
    EmiprodctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    BackendAuthGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass : AuthIntercepter,
      multi : true
    },
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
