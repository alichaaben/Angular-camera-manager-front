import { Component } from '@angular/core';

@Component({
  selector: 'app-cameralist',
  templateUrl: './cameralist.component.html',
  styleUrl: './cameralist.component.css'
})
export class CameralistComponent {

  displayedColumns: string[] = ['id', 'name', 'room', 'status' , 'actions'];
  dataSource = [
    {id: 1, name: 'Hydrogen', room:"room", status : 'active', link: 'H'},
    {id: 2, name: 'Helium', room:"room", status : 'active', link: 'He'},
    {id: 3, name: 'Lithium', room:"room", status : 'active', link: 'Li'},
    {id: 4, name: 'Beryllium', room:"room", status : 'active', link: 'Be'},
    {id: 5, name: 'Boron', room:"room", status : 'active', link: 'B'},
    {id: 6, name: 'Carbon', room:"room", status : 'active', link: 'C'},
    {id: 7, name: 'Nitrogen', room:"room", status : 'active', link: 'N'},
    {id: 8, name: 'Oxygen', room:"room", status : 'active', link: 'O'},
    {id: 9, name: 'Fluorine', room:"room", status : 'active', link: 'F'},
    {id: 10, name: 'Neon', room:"room", status : 'active', link: 'Ne'},
  ];


  
  delete (id : any ){
    confirm("are you sure you want to delete item with id "+id)
  }
}
