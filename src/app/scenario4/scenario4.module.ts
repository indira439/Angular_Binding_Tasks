import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [Parent1Component, Child1Component],
  imports: [
    CommonModule
  ],
  exports: [
    Parent1Component
  ]
})
export class Scenario4Module { }
