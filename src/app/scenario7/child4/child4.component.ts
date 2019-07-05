import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  public child4message;


  constructor(private siblingservice: SiblingService) { }

  ngOnInit() {

    this.siblingservice.getMessage().subscribe(msg => this.child4message = msg
      );
  }

}
