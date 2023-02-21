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
  public page: number = 1;

  private setAllMarvel: any;
  public getAllMalvel: any[] = [];

  ngOnChanges() {
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.marvelService.apiListAllPokemons.subscribe({
      next: (marvel) => {
        this.setAllMarvel = marvel;
        this.getAllMalvel = this.setAllMarvel;
        this.isLoading = true;
      },
      error: (err) => (this.apiError = true),
    });
  }

  pageEvent(pageNumber: number): void {
    this.page = pageNumber;
  }

  public getSearch(value: string) {
    const filter = this.setAllMarvel.filter((res: any) => {
      return !res.name.indexOf((value = value ? value[0].toUpperCase() + value.slice(1) : ''));
    });
    this.getAllMalvel = filter;
  }
}
