import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEComponent } from './child-e.component';

describe('ChildEComponent', () => {
  let component: ChildEComponent;
  let fixture: ComponentFixture<ChildEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
