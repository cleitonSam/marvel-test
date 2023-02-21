import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-marvel-search',
  templateUrl: './marvel-search.component.html',
  styleUrls: ['./marvel-search.component.scss'],
})
export class MarvelSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
