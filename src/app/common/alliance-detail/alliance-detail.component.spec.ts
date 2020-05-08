import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceDetailComponent } from './alliance-detail.component';

describe('AllianceDetailComponent', () => {
  let component: AllianceDetailComponent;
  let fixture: ComponentFixture<AllianceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllianceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllianceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
