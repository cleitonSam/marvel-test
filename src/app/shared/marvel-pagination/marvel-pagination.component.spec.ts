import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelPaginationComponent } from './marvel-pagination.component';

describe('MarvelPaginationComponent', () => {
  let component: MarvelPaginationComponent;
  let fixture: ComponentFixture<MarvelPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarvelPaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should totalPaginations', () => {
    component.collectionSize = 10;
    component.pageSize = 5;
    component.totalPaginations();
    expect(component.totalPages).toEqual([,]);
  });

  it('should selectPageNumber', () => {
    component.selectPageNumber(5);
    expect(component.currentPage).toEqual(5);
  });

  it('should next', () => {
    component.selectPageNumber(5);
    component.next();
    expect(component.currentPage).toEqual(5);
  });

  it('should previous', () => {
    component.selectPageNumber(5);
    component.previous();
    expect(component.currentPage).toEqual(4);
  });
});
