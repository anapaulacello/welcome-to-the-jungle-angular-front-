import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavModels } from 'src/app/shared/models/nav-models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input() public nav!:NavModels;
@Input() public showNav:boolean = false;
@Output() public showNavChange:EventEmitter<boolean> = new EventEmitter<boolean>();

public button:boolean=false;
constructor() { }

  ngOnInit(): void {
  }
  public closeNavbar(): void {
    this.showNavChange.emit(false);
  }
}
