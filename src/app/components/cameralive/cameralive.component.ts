import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CameraService } from '../../services/camera.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cameralive',
  templateUrl: './cameralive.component.html',
  styleUrl: './cameralive.component.css'
})
export class CameraliveComponent {
  videoURL = "https://jmp.sh/W7PrdVpQ?autoplay=1"
   
constructor( 
  private cameraService : CameraService,
  private activeRoute : ActivatedRoute,
){
 }


 ngOnInit(){
  this.getFlux()
 }

getFlux(){
  var id = this.activeRoute.snapshot.params["id"];
  this.cameraService.getLiveVideo(id).subscribe({
    next : (res : any )=>{
      this.videoURL = res[0].url ;
      console.log(res)
    }
  })
}

}
