import { Component } from '@angular/core';

@Component ({
  selector:'app-root',
  template:`<div>
              <h1>{{header}}</h1>
              <app-cars></app-cars>
          </div>`
})
export class AppComponent {
  header:String = "Car Details";
}