import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatecamera',
  templateUrl: './updatecamera.component.html',
  styleUrl: './updatecamera.component.css'
})
export class UpdatecameraComponent {

  name = new FormControl('', [Validators.required]);
  room = new FormControl('', [Validators.required]);
  link = new FormControl('' , [Validators.required])
  status = new FormControl('', [Validators.required])


  onSubmit(){
   var camera = {
      "name" : this.name,
      "room" : this.room,
      "link" : this.link,
      "status" : this.status,
    }
    console.log(camera)
  }

}
