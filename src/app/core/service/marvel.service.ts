import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private url: string =
    'http://gateway.marvel.com/v1/public/characters?limit=20&offset=0&ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        console.log(res.data.results);

        res.data.results.map((resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe((res) => (resPokemons.series = res));
        });
      }),
    );
  }

  apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
