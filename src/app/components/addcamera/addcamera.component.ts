import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CameraService } from '../../services/camera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcamera',
  templateUrl: './addcamera.component.html',
  styleUrl: './addcamera.component.css'
})
export class AddcameraComponent {

    nom = new FormControl('', [Validators.required]);
    localisation = new FormControl('', [Validators.required]);
     ip = new FormControl('' , [Validators.required])


    constructor(
      private router : Router,
      private cameraService : CameraService){}
 

    onSubmit(){
     var camera = {
        "nom" : this.nom.value,
        "localisation" : this.localisation.value,
         "adresseIP" : this.ip.value,
        "statut" : 'connectée'
      }
      console.log(camera)
      this.cameraService.create(camera).subscribe({
        next : (res)=> this.router.navigate(['/home/cameras/']),
        error : (err)=>console.log(err)
      })
    }

}
