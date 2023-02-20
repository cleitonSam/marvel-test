import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private url: string =
    'http://gateway.marvel.com/v1/public/characters?limit=50&offset=0&ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(map((res) => res.data.results));
  }

  getComicsByCharacter(characterId: string): Observable<any> {
    const comicByCharacterUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73`;
    return this.http.get<any>(comicByCharacterUrl).pipe(map((res) => res.data.results));
  }
  getSeriesByCharacter(characterId: string): Observable<any> {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73`;
    return this.http.get<any>(comicByCharacterUrl).pipe(map((res) => res.data.results));
  }

  getCharacterByEvents(characterName: string): Observable<any> {
    const characterBYNameUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterName}/series?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73`;
    return this.http.get<any>(characterBYNameUrl).pipe(map((res) => res.data.results));
  }
}
