import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { MarvelSearchComponent } from './marvel-search/marvel-search.component';
import { MarvelFooterComponent } from './marvel-footer/marvel-footer.component';

@NgModule({
  declarations: [MarvelHeaderComponent, MarvelSearchComponent, MarvelFooterComponent],
  imports: [CommonModule],
  exports: [MarvelHeaderComponent, MarvelSearchComponent, MarvelFooterComponent],
})
export class SharedModule {}
