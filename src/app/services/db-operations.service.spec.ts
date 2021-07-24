import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { DbOperationsService } from './db-operations.service';

describe('DbOperationsService', () => {
  let service: DbOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [DbOperationsService]});
    service = TestBed.inject(DbOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
