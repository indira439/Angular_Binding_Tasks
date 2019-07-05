import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ParntComponent } from './parnt/parnt.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

@NgModule({
  declarations: [ParntComponent, Sibling1Component, Sibling2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ParntComponent
  ]
})
export class Scenario6Module { }
