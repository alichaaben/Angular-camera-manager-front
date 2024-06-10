import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cameralive',
  templateUrl: './cameralive.component.html',
  styleUrl: './cameralive.component.css'
})
export class CameraliveComponent {
  videoURL = "https://www.youtube.com/embed/AzbiP0CV_mM&ab_channel=GAZI"
  safeURL ;
constructor( private _sanitizer: DomSanitizer){
  this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
}

}
