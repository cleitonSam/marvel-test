import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MarvelListComponent } from './marvel-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('MarvelListComponent', () => {
  let component: MarvelListComponent;
  let fixture: ComponentFixture<MarvelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarvelListComponent],
      providers: [{ provide: Router, useValue: 'list' }],
      imports: [HttpClientTestingModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pageEvent', () => {
    component.pageEvent(2);
    expect(component.page).toEqual(2);
  });
});
