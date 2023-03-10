import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeMarvelRoutingModule } from './home-pokemon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarvelMListModule } from '../marvel-list/marvel-list.module';
import { MarvelDetailsComponent } from './marvel-details/marvel-details.component';

@NgModule({
  declarations: [HomeComponent, MarvelDetailsComponent],
  imports: [CommonModule, MarvelMListModule, HomeMarvelRoutingModule, SharedModule],
})
export class HomeModule {}
