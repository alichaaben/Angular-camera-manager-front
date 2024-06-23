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
import { AuthGuard } from './guards/auth.guard' 


const routes: Routes = [

  {path : 'login' , component : LoginComponent}, 
   {path: 'home' , component : HomeComponent , canActivate : [
    AuthGuard
   ] , 
    children : [
    {path : 'cameras' , component : CameralistComponent  , canActivate : [
    AuthGuard
   ] , },
    {path : 'add-camera' , component : AddcameraComponent , canActivate : [
    AuthGuard
   ] , },
    {path : 'update/:id' , component : UpdatecameraComponent , canActivate : [
    AuthGuard
   ] , },
    {path : 'live/:id' , component : CameraliveComponent , canActivate : [
    AuthGuard
   ] , },
    {path : 'users' , component : UserlistComponent , canActivate : [
    AuthGuard
   ] , },
    {path : 'add-user', component : UseraddComponent , canActivate : [
    AuthGuard
   ] , },
    {path : 'users/:id' , component : UserupdateComponent , canActivate : [
    AuthGuard
   ] , },
    {path : 'profile' , component : ProfileComponent , canActivate : [
      AuthGuard
     ] , }
  ]},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
