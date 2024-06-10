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
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AddcameraComponent,
    CameralistComponent,
    UpdatecameraComponent,
    CameraliveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,

    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
