import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelSearchComponent } from './marvel-search.component';

describe('MarvelSearchComponent', () => {
  let component: MarvelSearchComponent;
  let fixture: ComponentFixture<MarvelSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarvelSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    const search = 'test';
    jest.spyOn(component.emmitSearch, 'emit');
    component.search(search);
    expect(component.emmitSearch.emit).toHaveBeenCalledWith('test');
  });
});
