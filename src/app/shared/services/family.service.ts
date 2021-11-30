import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  public BASE_URL:string="https://welocome-to-the-jungle.vercel.app"
  public FAMILY_URL:string=`${this.BASE_URL}/family/allFamily`
  public CREATE_FAMILY_URL:string=`${this.BASE_URL}/family/create`
  public DELETE_FAMILY_URL:string=`${this.BASE_URL}/family/delete`

  constructor(private httpClient:HttpClient) { }

  public getAllFamilies(){
    return this.httpClient.get(this.FAMILY_URL)
  }

  public createFamily(data:any){
    return this.httpClient.post(this.CREATE_FAMILY_URL,data)
  }
  public deleteFamily(data:any){
    return this.httpClient.delete(this.DELETE_FAMILY_URL,data)
  }
}
