import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {


  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email' , 'actions'];
  dataSource = [
    {id: 1, nom: 'Hydrogen', prenom:"prenom", email : 'active', },
    {id: 2, nom: 'Helium', prenom:"prenom", email : 'active', },
    {id: 3, nom: 'Lithium', prenom:"prenom", email : 'active', },
    {id: 4, nom: 'Beryllium', prenom:"prenom", email : 'active', },
    {id: 5, nom: 'Boron', prenom:"prenom", email : 'active', },
    {id: 6, nom: 'Carbon', prenom:"prenom", email : 'active', },
    {id: 7, nom: 'Nitrogen', prenom:"prenom", email : 'active', },
    {id: 8, nom: 'Oxygen', prenom:"prenom", email : 'active', },
    {id: 9, nom: 'Fluorine', prenom:"prenom", email : 'active', },
    {id: 10, nom: 'Neon', prenom:"prenom", email : 'active', },
  ];


  
  delete (id : any ){
    confirm("are you sure you want to delete item with id "+id)
  }
}
