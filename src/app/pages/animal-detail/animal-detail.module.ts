import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalDetailRoutingModule } from './animal-detail-routing.module';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';


@NgModule({
  declarations: [
    AnimalDetailComponent
  ],
  imports: [
    CommonModule,
    AnimalDetailRoutingModule
  ]
})
export class AnimalDetailModule { }
