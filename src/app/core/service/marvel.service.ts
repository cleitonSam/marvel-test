import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(`${environment.PATH_CHARACTERS}`).pipe(map((res) => res.data.results));
  }

  getComicsByCharacter(characterId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.PATH}/${characterId}/comics${environment.GM_KEY}`)
      .pipe(map((res) => res.data.results));
  }
  getSeriesByCharacter(characterId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.PATH}/${characterId}/series${environment.GM_KEY}`)
      .pipe(map((res) => res.data.results));
  }
}
