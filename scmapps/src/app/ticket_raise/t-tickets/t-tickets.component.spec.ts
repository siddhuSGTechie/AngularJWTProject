import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTicketsComponent } from './t-tickets.component';

describe('TTicketsComponent', () => {
  let component: TTicketsComponent;
  let fixture: ComponentFixture<TTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
