import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'admin',component:AdminHomeComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
