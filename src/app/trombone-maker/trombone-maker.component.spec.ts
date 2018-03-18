import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TromboneMakerComponent } from './trombone-maker.component';

describe('TromboneMakerComponent', () => {
  let component: TromboneMakerComponent;
  let fixture: ComponentFixture<TromboneMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TromboneMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TromboneMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
