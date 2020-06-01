import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenicsComponent } from './scenics.component';

describe('ScenicsComponent', () => {
  let component: ScenicsComponent;
  let fixture: ComponentFixture<ScenicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
