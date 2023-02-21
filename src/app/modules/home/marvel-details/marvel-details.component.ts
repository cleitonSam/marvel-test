import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { MarvelService } from 'src/app/core/service/marvel.service';

@Component({
  selector: 'app-marvel-details',
  templateUrl: './marvel-details.component.html',
  styleUrls: ['./marvel-details.component.scss'],
})
export class MarvelDetailsComponent implements OnInit {
  public malvelHeros: any = [];
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.getMarvel();
  }

  public getMarvel() {
    const id = this.activatedRoute.snapshot.params['id'];
    const series = this.marvelService.getSeriesByCharacter(id);
    const comics = this.marvelService.getComicsByCharacter(id);

    return forkJoin([series, comics]).subscribe({
      next: (marvel) => {
        (this.malvelHeros = marvel), (this.isLoading = true);
      },
      error: (err) => (this.apiError = true),
    });
  }
}
