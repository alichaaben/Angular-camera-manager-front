import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl('', [Validators.required , Validators.email]);
  password = new FormControl('', [Validators.required , Validators.minLength(8)]);
 
  constructor(private router : Router){

  }

  login(){
    this.router.navigate(['/home/cameras'])
  }
}
