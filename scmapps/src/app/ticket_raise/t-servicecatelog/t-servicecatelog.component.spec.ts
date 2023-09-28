import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TServicecatelogComponent } from './t-servicecatelog.component';

describe('TServicecatelogComponent', () => {
  let component: TServicecatelogComponent;
  let fixture: ComponentFixture<TServicecatelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TServicecatelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TServicecatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
