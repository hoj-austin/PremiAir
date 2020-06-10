import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AerialWorkComponent } from './aerial-work.component';

describe('AerialWorkComponent', () => {
  let component: AerialWorkComponent;
  let fixture: ComponentFixture<AerialWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerialWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerialWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
