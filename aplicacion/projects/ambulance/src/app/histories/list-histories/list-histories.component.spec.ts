import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoriesComponent } from './list-histories.component';

describe('ListHistoriesComponent', () => {
  let component: ListHistoriesComponent;
  let fixture: ComponentFixture<ListHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHistoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
