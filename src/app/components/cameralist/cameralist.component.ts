import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-cameralist',
  templateUrl: './cameralist.component.html',
  styleUrl: './cameralist.component.css'
})
export class CameralistComponent  implements OnInit{

  displayedColumns: string[] = ['id', 'nom', 'localisation', 'adresseIP','statut' , 'actions'];
  dataSource = [
    
  ];


  constructor(private cameraService : CameraService){}


  ngOnInit(): void {
      this.getAllCameras()
  }
  
  getAllCameras(){
    this.cameraService.getAllCameras().subscribe({
    
      next : (res : any )=> {
        this.dataSource= res
        console.log(res)
      }, 
      error : (err)=> console.error(err)
    })
  }
  delete (id : any ){
    if(
    confirm("are you sure you want to delete item with id "+id)){
      this.cameraService.deleteCamera(id).subscribe({
        next : (res )=> this.getAllCameras()
      })
    }
  }
}
