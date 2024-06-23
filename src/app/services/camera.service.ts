import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {


  url = "https://localhost:7039/ApiCam/Camera"
  constructor(
    private http : HttpClient
  ) { }


  getAllCameras(){
    return this.http.get(this.url)
  }

  getById(id : any ){
    return this.http.get(this.url +"/"+id)
  }
  
  deleteCamera(id : any ){
    return this.http.delete(this.url+"/"+id)
  }

  modifier(camera : any ){
    return this.http.put(this.url+"/" +camera.id , camera)
  }
  create(camera : any ){
    return this.http.post(this.url , camera)
  }

  getLiveVideo(id : any ){
    return this.http.get('https://localhost:7039/ApiCam/FluxVideo/by-camera?cameraId='+id)
  }
}
