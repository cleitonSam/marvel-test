import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelLoadingComponent } from './marvel-loading.component';

describe('MarvelLoadingComponent', () => {
  let component: MarvelLoadingComponent;
  let fixture: ComponentFixture<MarvelLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarvelLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
