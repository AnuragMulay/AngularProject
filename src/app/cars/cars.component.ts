import {Component } from '@angular/core'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarComponent {
    name:String = "Civic";
    brand:String = "Honda";
    inventory:String = "37";
}