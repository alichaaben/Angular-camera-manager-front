import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CameralistComponent } from './components/cameralist/cameralist.component';
import { AddcameraComponent } from './components/addcamera/addcamera.component';
import { UpdatecameraComponent } from './components/updatecamera/updatecamera.component';
import { CameraliveComponent } from './components/cameralive/cameralive.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UseraddComponent } from './components/useradd/useradd.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [

  {path : 'login' , component : LoginComponent},
   {path: 'home' , component : HomeComponent , children : [
    {path : 'cameras' , component : CameralistComponent},
    {path : 'add-camera' , component : AddcameraComponent},
    {path : 'update/:id' , component : UpdatecameraComponent},
    {path : 'live/:id' , component : CameraliveComponent},
    {path : 'users' , component : UserlistComponent},
    {path : 'add-user', component : UseraddComponent},
    {path : 'users/:id' , component : UserupdateComponent},
    {path : 'profile' , component : ProfileComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
