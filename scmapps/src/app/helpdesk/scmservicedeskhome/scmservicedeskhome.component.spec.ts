import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScmservicedeskhomeComponent } from './scmservicedeskhome.component';

describe('ScmservicedeskhomeComponent', () => {
  let component: ScmservicedeskhomeComponent;
  let fixture: ComponentFixture<ScmservicedeskhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScmservicedeskhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScmservicedeskhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
