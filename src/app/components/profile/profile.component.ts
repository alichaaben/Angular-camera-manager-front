import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  email = new FormControl('' , [Validators.required , Validators.email])
  username = new FormControl('' , [Validators.required , Validators.email])
  password  = new FormControl('' , [Validators.required])


  onSubmit(){
   var user = {
      "nom" : this.nom.value,
      "prenom" : this.prenom.value,
      "email" : this.email.value,
      "nom_utilisateur" : this.username.value
    }
    console.log(user)
  }
}
