import { AnimalsModel } from '../../../../shared/models/animals.model';
import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/shared/services/animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
public animalsList?:AnimalsModel[];

  constructor(private animalsService:AnimalsService) { }

  ngOnInit(): void {
    this.animalsService.getAllAnimals().subscribe((element:any)=>{
      const apiResults:AnimalsModel[]=element.data.animal;
      const formattedResults=apiResults.map(({id,name,isCarnivore,family})=>({
        id,name,isCarnivore,family
      }))
      this.animalsList=formattedResults
      console.log(apiResults)
    })
    
  }

}
