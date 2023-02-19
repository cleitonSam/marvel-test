import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { MarvelSearchComponent } from './marvel-search/marvel-search.component';
import { MarvelFooterComponent } from './marvel-footer/marvel-footer.component';
import { MarvelPaginationComponent } from './marvel-pagination/marvel-pagination.component';

@NgModule({
  declarations: [MarvelHeaderComponent, MarvelSearchComponent, MarvelFooterComponent, MarvelPaginationComponent],
  imports: [CommonModule],
  exports: [MarvelHeaderComponent, MarvelSearchComponent, MarvelFooterComponent, MarvelPaginationComponent],
})
export class SharedModule {}
