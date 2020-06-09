import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  currentUser : Object={};
  constructor(private router:Router,private _service:UserService) { }

  ngOnInit() {
    if(localStorage.getItem("role")!="user"){
      this.router.navigate(['/login']);
    }
    this._service.getUser(localStorage.getItem("token")).subscribe(data=>{
      console.log(data);
      this.currentUser=data;
    })
  }

  deconnexion=()=>{
    localStorage.setItem("token",null);
    localStorage.setItem("role",null);
    this.router.navigate(['/login']);
  }

}
