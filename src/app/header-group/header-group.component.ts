import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-header-group',
  templateUrl: './header-group.component.html',
  styleUrls: ['./header-group.component.scss']
})
export class HeaderGroupComponent implements OnInit {
  @Input() color: string;
  background: string;


  constructor() { 
    this.background = 'assets/images/background.jpeg';
  }

  ngOnInit(): void {
  }

}
