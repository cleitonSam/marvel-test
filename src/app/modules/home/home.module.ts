import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeMarvelRoutingModule } from './home-pokemon-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeMarvelRoutingModule],
})
export class HomeModule {}
