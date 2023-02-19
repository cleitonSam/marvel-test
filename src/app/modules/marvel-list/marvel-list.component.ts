import { Component } from '@angular/core';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.scss'],
})
export class MarvelListComponent {
  tableContent = [
    { id: 12, name: 'Dr.Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
  ];
}
