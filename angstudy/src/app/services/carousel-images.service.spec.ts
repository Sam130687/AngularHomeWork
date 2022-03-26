import { TestBed } from '@angular/core/testing';

import { CarouselImagesService } from './carousel-images.service';

describe('CarouselImagesService', () => {
  let service: CarouselImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
