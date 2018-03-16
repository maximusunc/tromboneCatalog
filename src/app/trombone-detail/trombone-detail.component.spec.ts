import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TromboneDetailComponent } from './trombone-detail.component';

describe('TromboneDetailComponent', () => {
  let component: TromboneDetailComponent;
  let fixture: ComponentFixture<TromboneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TromboneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TromboneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
