import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { BackendAuthGuard } from './auth/backend-auth.guard';
import { EmiprodctComponent } from './emi/emiprodct/emiprodct.component';
import { ForbiddenComponent } from './forbidden/forbidden/forbidden.component';
import { AddsiteComponent } from './helpdesk/addsite/addsite.component';
import { HelpdeskComponent } from './helpdesk/helpdesk/helpdesk.component';
import { ScmservicedeskComponent } from './helpdesk/scmservicedesk/scmservicedesk.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { THomeComponent } from './ticket_raise/t-home/t-home.component';
import { TServicecatelogComponent } from './ticket_raise/t-servicecatelog/t-servicecatelog.component';
import { TSolutionsComponent } from './ticket_raise/t-solutions/t-solutions.component';
import { TTicketsComponent } from './ticket_raise/t-tickets/t-tickets.component';
import { UserComponent } from './user/user/user.component';
import { UserRegistrationComponent } from './usermanagement/user-registration/user-registration.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"admin", component:AdminComponent, canActivate: [BackendAuthGuard], data: {roles: ['Admin']}},
  {path:"user", component:UserComponent, canActivate: [BackendAuthGuard], data: {roles: ['Admin']}},
  {path:"login", component:LoginComponent},
  {path:"forbidden", component: ForbiddenComponent},
  {path:"userreg", component: UserRegistrationComponent},
  {path:"helpdesk", component: HelpdeskComponent, canActivate:[BackendAuthGuard], data:{roles: ['User', 'Admin']}},
  {path:"scmdesk", component: ScmservicedeskComponent},
  {path:"addsite", component: AddsiteComponent},
  {path:"t_home", component: THomeComponent},
  {path:"t_solutions", component: TSolutionsComponent},
  {path:"t_tickets", component: TTicketsComponent},
  {path:"t_servicecatelog", component: TServicecatelogComponent},
  {path:"emitrack", component: EmiprodctComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
