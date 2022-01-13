import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public routerLinkVariable1 ="/login"
  public routerLinkVariable2 ="/login"


  homeContent = 'content-active'
 

  constructor() { }

  buttonMore(){
      this.homeContent = 'content-notActive'
  }

  buttonBack(){
    this.homeContent = 'content-active'
  }

  ngOnInit(): void {
  }

}
