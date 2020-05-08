import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectBeyondComponent } from './expect-beyond.component';

describe('ExpectBeyondComponent', () => {
  let component: ExpectBeyondComponent;
  let fixture: ComponentFixture<ExpectBeyondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpectBeyondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectBeyondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
