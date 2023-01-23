import { Component } from "@angular/core";

@Component ({
    selector:'grand-c',
    templateUrl:'./gc.component.html'
})

export class gcComponent {

    constructor() {
        console.log("Inside GC Component");     
    } 

    gc:string = "This is GC";
}