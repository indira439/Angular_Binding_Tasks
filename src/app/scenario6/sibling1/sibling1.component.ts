import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit(sendmsg) {
    this.childEvent.emit(sendmsg);
    console.log(sendmsg);

  }


}
