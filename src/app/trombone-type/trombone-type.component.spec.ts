import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TromboneTypeComponent } from './trombone-type.component';

describe('TromboneTypeComponent', () => {
  let component: TromboneTypeComponent;
  let fixture: ComponentFixture<TromboneTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TromboneTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TromboneTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
