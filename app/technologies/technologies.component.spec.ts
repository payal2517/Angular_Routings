import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEchnologiesComponent } from './technologies.component';

describe('TEchnologiesComponent', () => {
  let component: TEchnologiesComponent;
  let fixture: ComponentFixture<TEchnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TEchnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEchnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
