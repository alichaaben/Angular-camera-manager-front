import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-updatecamera',
  templateUrl: './updatecamera.component.html',
  styleUrl: './updatecamera.component.css'
})
export class UpdatecameraComponent {

  camera : any= {} ;
   statut = false 



  constructor(
    private activeRoute : ActivatedRoute ,
    private router : Router,
    private cameraService : CameraService){}

    ngOnInit(){
      this.getById()
    }

    getById(){
      this.cameraService.getById( this.activeRoute.snapshot.params["id"]).subscribe({
        next : (res )=>{
          
          this.camera = res
          this.statut = this.camera.statut   == 'connectée'
          console.log(this.camera);
          
          }
      })
    }

  onSubmit(){
   
    console.log(this.camera)
    this.cameraService.modifier(this.camera).subscribe({
      next : (res)=> this.router.navigate(['/home/cameras/']),
      error : (err)=>console.log(err)
    })
  }

}
