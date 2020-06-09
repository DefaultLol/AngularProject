import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel : Object={};
  error : string = '';
  constructor(private _service:UserService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit=()=>{
    this._service.login(this.userModel).subscribe(data=>{
      console.log(data[0]);
      localStorage.setItem("token",data[0]);
      this._service.getUser(data[0]).subscribe(data1=>{
        console.log(data1.role);
        localStorage.setItem("role",data1.role);
        if(data1.role==="admin") this.router.navigate(['/admin']);
        if(data1.role==="user") this.router.navigate(['']);
      });
    },error=>{
      this.error="Error";
      console.log(error);
    });
  }

}
