import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  let service: MarvelService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created finishDecryptPaymentLink', () => {
    const urlDecryptMock =
      'http://gateway.marvel.com/v1/public/characters?limit=50&offset=0&ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';
    service.apiListAllMarvel.subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const httpRequest = httpTestingController.expectOne(urlDecryptMock);
    expect(httpRequest.request.method).toEqual('GET');
  });
  it('should be created finishDecryptPaymentLink', () => {
    const urlDecryptMock =
      'http://gateway.marvel.com/v1/public/characters/1234/comics?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';
    service.getComicsByCharacter('1234').subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const httpRequest = httpTestingController.expectOne(urlDecryptMock);
    expect(httpRequest.request.method).toEqual('GET');
  });
  it('should be created finishDecryptPaymentLink', () => {
    const urlDecryptMock =
      'http://gateway.marvel.com/v1/public/characters/1234/series?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';
    service.getSeriesByCharacter('1234').subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const httpRequest = httpTestingController.expectOne(urlDecryptMock);
    expect(httpRequest.request.method).toEqual('GET');
  });
});
