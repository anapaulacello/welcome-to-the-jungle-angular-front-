import { HabitatsComponent } from './components/habitats/habitats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitatsRoutingModule } from './habitats-routing.module';
import { HabitatsService } from 'src/app/shared/services/habitats.service';

@NgModule({
  declarations: [
    HabitatsComponent
  ],
  imports: [
    CommonModule,
    HabitatsRoutingModule
  ],
  providers: [HabitatsService]
})
export class HabitatsModule { }
