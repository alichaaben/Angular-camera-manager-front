import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddcameraComponent } from './components/addcamera/addcamera.component';
import { CameralistComponent } from './components/cameralist/cameralist.component';
import { UpdatecameraComponent } from './components/updatecamera/updatecamera.component';
import { CameraliveComponent } from './components/cameralive/cameralive.component';
import { MatTableModule} from '@angular/material/table'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UseraddComponent } from './components/useradd/useradd.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { ProfileComponent } from './components/profile/profile.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { SafePipe } from './pipes/safe.pipe';
import { SideComponent } from './components/side/side.component';
import { JwtInterceptor } from './interceptors/http.interceptor';
import { AuthGuard } from './guards/auth.guard';
   
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AddcameraComponent,
    CameralistComponent,
    UpdatecameraComponent,
    CameraliveComponent,
    UserlistComponent,
    UseraddComponent,
    UserupdateComponent,
    ProfileComponent,
    SafePipe,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
 
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  providers: [
    AuthGuard,
     provideAnimationsAsync(),
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
