import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl('', [Validators.required , ]);
  password = new FormControl('', [Validators.required , Validators.minLength(8)]);
 
  constructor(
    private auth : AuthService,
    private router : Router){

  }

  login(){
    var user = {
      "username" : this.email.value , 
      "password" : this.password.value
    }
    console.log(user);
    
this.auth.login(user).subscribe({
  next : (res : any )=>{
    console.log(res);
    
    this.auth.saveToken(res.token)
    localStorage.setItem("userId" , res.id)
    this.router.navigate(['/home/cameras'])
  } ,
  error : (res : any )=>{
    console.log(res);
    
  }
})

  }
}
