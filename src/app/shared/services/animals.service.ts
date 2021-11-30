import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  public BASE_URL:string="http://localhost:4000"
  public ANIMALS_URL:string=`${this.BASE_URL}/animal/allAnimal`
  public CREATE_ANIMALS_URL:string=`${this.BASE_URL}/animal/create`
  public DELETE_ANIMALS_URL:string=`${this.BASE_URL}/animal/delete`

  constructor(private httpClient:HttpClient) { }

  public getAllAnimals(){
    return this.httpClient.get(this.ANIMALS_URL)
  }

  public getAllAnimalByName(id:any){
    return this.httpClient.get(`${this.BASE_URL}/animal/${id}`)
  }


  public createAnimal(data:any){
    return this.httpClient.post(this.CREATE_ANIMALS_URL,data)
  }
  public deleteAnimal(data:any){
    return this.httpClient.delete(this.DELETE_ANIMALS_URL,data)
  }
}
