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
});
