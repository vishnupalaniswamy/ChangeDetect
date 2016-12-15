import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('child2-OnChanges');  
  }

}
