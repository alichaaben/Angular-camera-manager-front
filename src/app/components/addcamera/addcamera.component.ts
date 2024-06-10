import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcamera',
  templateUrl: './addcamera.component.html',
  styleUrl: './addcamera.component.css'
})
export class AddcameraComponent {
    name = new FormControl('', [Validators.required]);
    room = new FormControl('', [Validators.required]);
    link = new FormControl('' , [Validators.required])



    onSubmit(){
     var camera = {
        "name" : this.name,
        "room" : this.room,
        "link" : this.link
      }
      console.log(camera)
    }

}
