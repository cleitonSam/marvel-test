import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/core/service/marvel.service';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.scss'],
})
export class MarvelListComponent implements OnInit {
  constructor(private marvelService: MarvelService, private cdRef: ChangeDetectorRef) {}

  public isLoading: boolean = false;
  public apiError: boolean = false;

  private setAllPokemons: any;
  public getAllPokemons: any[] = [];

  ngOnChanges() {
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.marvelService.apiListAllPokemons.subscribe({
      next: (marvel) => {
        this.setAllPokemons = marvel;
        this.getAllPokemons = this.setAllPokemons;
        this.isLoading = true;
      },
      error: (err) => (this.apiError = true),
    });
  }

  page = 1;

  pageEvent(pageNumber: number): void {
    this.page = pageNumber;
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf((value = value ? value[0].toUpperCase() + value.slice(1) : ''));
    });
    this.getAllPokemons = filter;
  }
}
