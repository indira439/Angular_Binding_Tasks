import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';

@NgModule({
  declarations: [Parent3Component, Child3Component, Child4Component],
  imports: [
    CommonModule
  ],
  exports: [
    Parent3Component
  ]
})
export class Scenario7Module { }
