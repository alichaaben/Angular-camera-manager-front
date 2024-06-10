import { Component } from '@angular/core';

@Component({
  selector: 'app-cameralist',
  templateUrl: './cameralist.component.html',
  styleUrl: './cameralist.component.css'
})
export class CameralistComponent {

  displayedColumns: string[] = ['id', 'name', 'room', 'actions'];
  dataSource = [
    {id: 1, name: 'Hydrogen', room:"room", link: 'H'},
    {id: 2, name: 'Helium', room:"room", link: 'He'},
    {id: 3, name: 'Lithium', room:"room", link: 'Li'},
    {id: 4, name: 'Beryllium', room:"room", link: 'Be'},
    {id: 5, name: 'Boron', room:"room", link: 'B'},
    {id: 6, name: 'Carbon', room:"room", link: 'C'},
    {id: 7, name: 'Nitrogen', room:"room", link: 'N'},
    {id: 8, name: 'Oxygen', room:"room", link: 'O'},
    {id: 9, name: 'Fluorine', room:"room", link: 'F'},
    {id: 10, name: 'Neon', room:"room", link: 'Ne'},
  ];


  
  delete (id : any ){
    confirm("are you sure you want to delete item with id "+id)
  }
}
