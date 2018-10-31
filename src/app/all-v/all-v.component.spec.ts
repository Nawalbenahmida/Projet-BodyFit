import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVComponent } from './all-v.component';

describe('AllVComponent', () => {
  let component: AllVComponent;
  let fixture: ComponentFixture<AllVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
