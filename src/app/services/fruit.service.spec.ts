import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FruitService } from './fruit.service';

describe('FruitService', () => {
  let service: FruitService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FruitService]
    });
    service = TestBed.inject(FruitService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve fruits from the API via GET', () => {
    const dummyFruits = [
      { name: 'Apple', carbohydrates: 13.81, fats: 0.17, proteins: 0.26, sugars: 10.39, calories: 52 },
      { name: 'Banana', carbohydrates: 22.84, fats: 0.33, proteins: 1.09, sugars: 12.23, calories: 89 }
    ];

    service.getFruits().subscribe(fruits => {
      expect(fruits.length).toBe(2);
      expect(fruits).toEqual(dummyFruits);
    });

    const request = httpMock.expectOne(service.apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(dummyFruits);
  });
});
