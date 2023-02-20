import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-marvel-search',
  templateUrl: './marvel-search.component.html',
  styleUrls: ['./marvel-search.component.scss'],
})
export class MarvelSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
