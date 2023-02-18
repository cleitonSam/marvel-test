import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { MarvelSearchComponent } from './marvel-search/marvel-search.component';

@NgModule({
  declarations: [MarvelHeaderComponent, MarvelSearchComponent],
  imports: [CommonModule],
  exports: [MarvelHeaderComponent],
})
export class SharedModule {}
