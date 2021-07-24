import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { DeleteListingComponent } from './delete-listing.component';

describe('DeleteListingComponent', () => {
  let component: DeleteListingComponent;
  let fixture: ComponentFixture<DeleteListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ DeleteListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
