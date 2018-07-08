import { TestBed, inject } from '@angular/core/testing';

import { PictureServiceService } from './picture-service.service';

describe('PictureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PictureServiceService]
    });
  });

  it('should be created', inject([PictureServiceService], (service: PictureServiceService) => {
    expect(service).toBeTruthy();
  }));
});
