import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from 'src/app/shared/services/animals.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
public id:any;
public animalFound:any;
  constructor(private route:ActivatedRoute, public animalsService:AnimalsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const idAnimal=params.get("id")
      this.animalsService.getAllAnimalByName(idAnimal).subscribe((animal:any)=>{
        this.animalFound=animal.data.Animal[0]
        console.log("este",this.animalFound.family)
      })
    })
  }

}
