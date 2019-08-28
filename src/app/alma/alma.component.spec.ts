import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmaComponent } from './alma.component';

describe('AlmaComponent', () => {
  let component: AlmaComponent;
  let fixture: ComponentFixture<AlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
