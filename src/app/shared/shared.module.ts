import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { MarvelSearchComponent } from './marvel-search/marvel-search.component';
import { MarvelPaginationComponent } from './marvel-pagination/marvel-pagination.component';
import { MarvelLoadingComponent } from './marvel-loading/marvel-loading.component';
import { FormsModule } from '@angular/forms';
import { MarvelFooterComponent } from './marvel-footer/marvel-footer.component';

@NgModule({
  declarations: [
    MarvelHeaderComponent,
    MarvelSearchComponent,
    MarvelPaginationComponent,
    MarvelLoadingComponent,
    MarvelFooterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    MarvelHeaderComponent,
    MarvelSearchComponent,
    MarvelPaginationComponent,
    MarvelLoadingComponent,
    MarvelFooterComponent,
  ],
})
export class SharedModule {}
