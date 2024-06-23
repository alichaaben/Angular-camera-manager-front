import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nom_utilisateur', 'prenom', 'email' , 'actions'];
  dataSource = [
    
  ];

  constructor(private userService : AuthService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next : (res : any  )=> {
        this.dataSource = res ;
        console.log(this.dataSource)
      }
    })
  }
  
  delete (id : any ){if(
    confirm("are you sure you want to delete item with id "+id)){
      this.userService.delete(id ).subscribe({
        next : (res )=> this.getAllUsers()
      })
    }
  }
}
