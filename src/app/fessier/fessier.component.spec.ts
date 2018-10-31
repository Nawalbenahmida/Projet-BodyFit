import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FessierComponent } from './fessier.component';

describe('FessierComponent', () => {
  let component: FessierComponent;
  let fixture: ComponentFixture<FessierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FessierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FessierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
