import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDriverComponent } from './form-driver.component';

describe('FormDriverComponent', () => {
  let component: FormDriverComponent;
  let fixture: ComponentFixture<FormDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
