import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomentComponent } from './viewcoment.component';

describe('ViewcomentComponent', () => {
  let component: ViewcomentComponent;
  let fixture: ComponentFixture<ViewcomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
