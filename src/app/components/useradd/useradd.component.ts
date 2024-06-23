import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrl: './useradd.component.css'
})
export class UseraddComponent {

  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  email = new FormControl('' , [Validators.required , Validators.email])
   password  = new FormControl('' , [Validators.required])
  role  = new FormControl('' , [Validators.required])

  constructor(
    private router : Router,
    private userService : AuthService){}

  onSubmit(){
   var user = {
    "id": '0',
       "prenom" : this.prenom.value,
      "email" : this.email.value,
      "nom_utilisateur" : this.nom.value,
      "mot_de_passe" : this.password.value,
      "role" : this.role,
      "actif" : '1',
      "locale" : "en"
    }
    console.log(user);
    
    this.userService.create(user).subscribe({
      next : (res : any )=>{
        this.router.navigate(['/home/users'])
      },
      error : (err)=>{
        console.log(err);
        
      }
    })
  }
}
