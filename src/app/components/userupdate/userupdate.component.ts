import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrl: './userupdate.component.css'
})
export class UserupdateComponent {


  user : any  = {}


  constructor(
    private activeRoute : ActivatedRoute,
    private router : Router,
    private userService : AuthService){}


  ngOnInit(){
   this.getById()
  }
  getById(){
    this.userService.getById(this.activeRoute.snapshot.params['id']).subscribe({
      next : (res)=>{this.user = res

        console.log(this.user);
        
       }
    })
  }
  onSubmit(){
    this.userService.update(this.user).subscribe({
      next : (res)=> this.router.navigate(['/home/users'])
    })

  }
}
