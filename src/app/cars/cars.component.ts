import {Component} from '@angular/core'

@Component ({
    selector:'car-Data',
    templateUrl:'/src/app/cars/cars.component.html',
    styleUrls:['/src/app/cars/cars.component.css']
})
export class CarComponent {
    name:String = "Civic";
    brand:String = "Honda";
    inventory:String = "37";
}