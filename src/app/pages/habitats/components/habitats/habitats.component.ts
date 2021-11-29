import { HabitatsModel } from './../../models/habitats.model';
import { Component, OnInit } from '@angular/core';
import { HabitatsService } from 'src/app/shared/services/habitats.service';

@Component({
  selector: 'app-habitats',
  templateUrl: './habitats.component.html',
  styleUrls: ['./habitats.component.scss']
})
export class HabitatsComponent implements OnInit {
  public habitatsList?:HabitatsModel[];

  constructor(private habitatsService:HabitatsService) { }

  ngOnInit(): void {
    this.habitatsService.getAllHabitats().subscribe((element:any)=>{
      const apiResults:HabitatsModel[]=element.data.habitats;
       const formattedResults=apiResults.map(({id,name,location,mode})=>({
        id,
        name,
        location,
        mode
      }))
      this.habitatsList=formattedResults;
      console.log(apiResults)
    })
  }

}
