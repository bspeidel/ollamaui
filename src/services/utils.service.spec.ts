import { UtilsService } from './utils.service';
import { TestBed } from '@angular/core/testing';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a string in the correct format with all components', () => {
    const currentTime = new Date();
    const expectedFormat = `[${currentTime.getFullYear()}-${(
      '0' +
      (currentTime.getMonth() + 1)
    ).slice(-2)}-${('0' + currentTime.getDate()).slice(-2)} ${(
      '0' + currentTime.getHours()
    ).slice(-2)}:${('0' + currentTime.getMinutes()).slice(-2)}:${(
      '0' + currentTime.getSeconds()
    ).slice(-2)}]`;

    expect(service.getTimeDate()).toEqual(expectedFormat);
  });
});
