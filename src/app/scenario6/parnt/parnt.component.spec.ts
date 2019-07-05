import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParntComponent } from './parnt.component';

describe('ParntComponent', () => {
  let component: ParntComponent;
  let fixture: ComponentFixture<ParntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
