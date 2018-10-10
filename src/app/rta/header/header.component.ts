import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showMenuFlag = false;
  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.showMenuFlag = true;
  }
  closeMenu() {
    this.showMenuFlag = false;
  }
}
