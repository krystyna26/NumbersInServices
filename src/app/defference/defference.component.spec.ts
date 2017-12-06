import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferenceComponent } from './defference.component';

describe('DefferenceComponent', () => {
  let component: DefferenceComponent;
  let fixture: ComponentFixture<DefferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
