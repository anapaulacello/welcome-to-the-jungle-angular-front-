import { NavModels } from './shared/models/nav-models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-loading-project';
  public nav!:NavModels;

  constructor(){
    this.nav={
      item:[
        {
          name: "HOME",
          link: "/home",
        },
        {
          name: "ANIMALES",
          link: "/animals"
        },
        {
          name: "HABITATS",
          link: "/habitats"
        }
      ]
    }
  }
  public isOpenNavbar = false;

public showNavbar () {
  this.isOpenNavbar = !this.isOpenNavbar;
}
}
