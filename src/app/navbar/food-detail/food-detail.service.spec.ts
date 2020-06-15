import { TestBed } from '@angular/core/testing';

import { FoodDetailService } from './food-detail.service';

describe('FoodDetailService', () => {
  let service: FoodDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
