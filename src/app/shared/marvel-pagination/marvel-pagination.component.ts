import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-marvel-pagination',
  templateUrl: './marvel-pagination.component.html',
  styleUrls: ['./marvel-pagination.component.scss'],
})
export class MarvelPaginationComponent implements OnInit {
  @Input() collectionSize = 0;
  @Input() pageSize = 5;
  @Input() currentPage = 1;
  @Input() maxSize = 2;
  @Input() firstLastButtons = false;
  @Input() nextPreviousButtons = true;
  totalPages: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
