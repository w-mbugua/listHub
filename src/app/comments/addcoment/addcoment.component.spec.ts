import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomentComponent } from './addcoment.component';

describe('AddcomentComponent', () => {
  let component: AddcomentComponent;
  let fixture: ComponentFixture<AddcomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
