import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MarvelDetailsComponent } from './marvel-details.component';

describe('MarvelDetailsComponent', () => {
  let component: MarvelDetailsComponent;
  let fixture: ComponentFixture<MarvelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarvelDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
