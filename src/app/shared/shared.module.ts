import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { MarvelSearchComponent } from './marvel-search/marvel-search.component';
import { MarvelPaginationComponent } from './marvel-pagination/marvel-pagination.component';

@NgModule({
  declarations: [MarvelHeaderComponent, MarvelSearchComponent, MarvelPaginationComponent],
  imports: [CommonModule],
  exports: [MarvelHeaderComponent, MarvelSearchComponent, MarvelPaginationComponent],
})
export class SharedModule {}
