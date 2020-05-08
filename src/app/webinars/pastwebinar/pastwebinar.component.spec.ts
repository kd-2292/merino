import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastwebinarComponent } from './pastwebinar.component';

describe('PastwebinarComponent', () => {
  let component: PastwebinarComponent;
  let fixture: ComponentFixture<PastwebinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastwebinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastwebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
