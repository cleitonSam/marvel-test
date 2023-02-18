import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';

@NgModule({
  declarations: [MarvelHeaderComponent],
  imports: [CommonModule],
  exports: [MarvelHeaderComponent],
})
export class SharedModule {}
