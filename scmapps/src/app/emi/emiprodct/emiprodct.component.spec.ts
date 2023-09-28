import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiprodctComponent } from './emiprodct.component';

describe('EmiprodctComponent', () => {
  let component: EmiprodctComponent;
  let fixture: ComponentFixture<EmiprodctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiprodctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiprodctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
