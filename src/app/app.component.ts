import { Component } from '@angular/core';

@Component ({
  selector:'app-root',
  template:`<div>
              <p>Hello {{name}}. <app-cars></app-cars></p>
          </div>`
})
export class AppComponent {
  name:String = "User123";
}