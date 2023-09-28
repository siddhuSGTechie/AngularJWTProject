import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScmservicedeskComponent } from './scmservicedesk.component';

describe('ScmservicedeskComponent', () => {
  let component: ScmservicedeskComponent;
  let fixture: ComponentFixture<ScmservicedeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScmservicedeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScmservicedeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
