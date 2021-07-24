import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommentComponent } from './deletecomment.component';

describe('DeletecommentComponent', () => {
  let component: DeletecommentComponent;
  let fixture: ComponentFixture<DeletecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
