import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scam1-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor() { }
  heroes = [{Name: 'Spiderman', Id: 1}, { Name: 'Batman', Id: 2}];

  ngOnInit() {
  }
}
