import { General } from './models/general';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-loading-project';
  public general!:General;

  constructor(){
    this.general={
      nav:{
        title:'my Angulr aplication ',
        img:{
          src:'',
          alt:''
        }
      },
      gallery:[{
        title:'my Angulr aplication ',
        img:{
          src:'',
          alt:''
        }
        
      }],
      about:{
        
      }
    }
  }
}
