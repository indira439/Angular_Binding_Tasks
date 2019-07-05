import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor(private siblingservice: SiblingService) { }

  ngOnInit() {
  }

  sendMessage(msg) {

    this.siblingservice.sendMessage(msg);
    }


}
