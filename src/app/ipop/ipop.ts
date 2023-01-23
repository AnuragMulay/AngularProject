import { Component, Input, Output, EventEmitter} from "@angular/core";
@Component ({
    selector:'ipop-d',
    templateUrl:'./ipop.html'
})
export class inputDComponent {

    constructor () {
        console.log("Inside inputD Component");
    };
    //Using the Input decorator 
    @Input() inputD:number;

    //Using the output decorator
    @Output() outputD = new EventEmitter<string>();

    addNewItem(inputValue: string) {
        this.outputD.emit(inputValue);
    }
    // addNewItem(inputValue: HTMLInputElement) {
    //     this.outputD.emit(inputValue.value);
    // }
}