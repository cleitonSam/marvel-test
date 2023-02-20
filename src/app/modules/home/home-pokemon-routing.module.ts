import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MarvelDetailsComponent } from './marvel-details/marvel-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animationState: 'One' },
  },
  {
    path: 'details/:id',
    component: MarvelDetailsComponent,
    data: { animationState: 'Two' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMarvelRoutingModule {}
