import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelListComponent } from './marvel-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MarvelListComponent],
  exports: [MarvelListComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class MarvelMListModule {}
