import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Output() public middleEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit(child2op) {
    this.middleEvent.emit(child2op);
  }

}
