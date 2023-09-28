import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdmaccessComponent } from './idmaccess.component';

describe('IdmaccessComponent', () => {
  let component: IdmaccessComponent;
  let fixture: ComponentFixture<IdmaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdmaccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdmaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
