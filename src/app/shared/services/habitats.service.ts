import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabitatsService {
  public BASE_URL:string="https://welocome-to-the-jungle.vercel.app"
  public HABITATS_URL:string=`${this.BASE_URL}/habitat/allHabitat`
  public CREATE_HABITATS_URL:string=`${this.BASE_URL}/habitat/create`
  public DELETE_HABITATS_URL:string=`${this.BASE_URL}/habitat/delete`

  constructor(private httpClient:HttpClient) { }

  public getAllHabitats(){
    return this.httpClient.get(this.HABITATS_URL)
  }

  public createHabitat(data:any){
    return this.httpClient.post(this.CREATE_HABITATS_URL,data)
  }
  public deleteHabitat(data:any){
    return this.httpClient.delete(this.DELETE_HABITATS_URL,data)
  }
}
