import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TromboneSearchComponent } from './trombone-search.component';

describe('TromboneSearchComponent', () => {
  let component: TromboneSearchComponent;
  let fixture: ComponentFixture<TromboneSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TromboneSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TromboneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
