import { Component } from '@angular/core';

@Component ({
  selector:'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {

  constructor() {
    console.log("Inside Root Component");     
  } 

  parentData = 5;
  name:String = "User123";
  items = ['first','2nd'];

  addItem(newItem:string) {
    this.items.push(newItem);
  }
}