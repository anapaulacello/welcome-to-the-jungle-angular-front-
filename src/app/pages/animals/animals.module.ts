import { AnimalsComponent } from './components/animals/animals.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsService } from './../../shared/services/animals.service';

@NgModule({
  declarations: [
    AnimalsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ],
  providers:[AnimalsService]
})
export class AnimalsModule { }
