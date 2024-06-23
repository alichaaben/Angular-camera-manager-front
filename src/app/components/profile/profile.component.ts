import { Component } from '@angular/core'; 
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
 
  user : any  = {}


  constructor( 
    private router : Router ,
    private userService : AuthService){}


  ngOnInit(){
   this.getById()
  }
  getById(){
    this.userService.getById(localStorage.getItem("userId")).subscribe({
      next : (res)=>{this.user = res
        console.log(this.user);
        
       }
    })
  }
  onSubmit(){
    this.userService.update(this.user).subscribe({
      next : (res)=> {
        this.router.navigate(["/home/cameras"])
      }
    })

  }
}
