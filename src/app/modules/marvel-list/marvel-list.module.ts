import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarvelListComponent } from './marvel-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MarvelListComponent],
  exports: [MarvelListComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class MarvelMListModule {}
