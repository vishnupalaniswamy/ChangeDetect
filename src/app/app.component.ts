import {Component, OnInit} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
import {Child1Component} from "./child1/child1.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends OnInit {

  @ViewChild('child1') child1: Child1Component;

  title = 'app works!';

  private myData = [];

  constructor() {
    super();
  }

  ngOnInit() {
    setTimeout(()=> {
        // This would also change the input to child2
        this.myData = ['hello', 'world'];

        // Change child1's 'input' explicitly
        if (this.child1) {
          this.child1.data = this.myData;
        }
      },
      500);
  }

  onClickChangeData() {
    let newArray = ['new', 'array', 'assigned'];
    this.myData = newArray;
  }

  onClickChangeItem() {
    // this.data[1] = 'item2';
    this.myData[1] = this.randomString(5, null);
  }

  onClickRemoveItem() {
    this.myData.splice(0, 1 );
  }

  onClickAddItem() {
    this.myData.push(this.randomString(5, null));
  }

  randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

}
