import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSolutionsComponent } from './t-solutions.component';

describe('TSolutionsComponent', () => {
  let component: TSolutionsComponent;
  let fixture: ComponentFixture<TSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
