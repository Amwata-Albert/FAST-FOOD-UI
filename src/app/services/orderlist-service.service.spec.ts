import { TestBed } from '@angular/core/testing';

import { OrderlistServiceService } from './orderlist-service.service';

describe('OrderlistServiceService', () => {
  let service: OrderlistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderlistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
