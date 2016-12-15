import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit, OnChanges {

  @Input() child3Input: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('child3-OnChanges');  
  }


}
