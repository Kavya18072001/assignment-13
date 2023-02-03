import { Component,Input, Output,EventEmitter} from "@angular/core";
// import { EventEmitter } from "stream";

@Component({
selector:'app-child',
templateUrl:'./child.component.html',
})
export class childcomponent{
    @Input() count: number=0;
    @Output() getdata = new EventEmitter();
    decrement() {
      this.count--;
      this.getdata.emit(this.count);
    }
  
    increment() {
      this.count++;
      this.getdata.emit(this.count);
    }
    reset(){
        this.count=0;
        this.getdata.emit(this.count);
    }
}