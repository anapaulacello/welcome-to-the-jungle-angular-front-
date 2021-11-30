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
        title:'',
      },
      animal:[{
        id:'',
        name:'',
        isCarnivore:true,
        family:''
      }],
      habitat:[{
        id:'',
        name:'',
        location:'',
        mode:''
      }]
    }
  }
}
