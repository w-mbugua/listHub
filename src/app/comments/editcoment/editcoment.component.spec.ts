import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomentComponent } from './editcoment.component';

describe('EditcomentComponent', () => {
  let component: EditcomentComponent;
  let fixture: ComponentFixture<EditcomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
