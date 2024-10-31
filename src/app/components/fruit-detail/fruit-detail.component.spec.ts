import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitDetailComponent } from './fruit-detail.component';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from 'src/app/services/fruit.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('FruitDetailComponent', () => {
  let component: FruitDetailComponent;
  let fixture: ComponentFixture<FruitDetailComponent>;
  let fruitServiceSpy: jasmine.SpyObj<FruitService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('FruitService', ['getFruits']);
    await TestBed.configureTestingModule({
      declarations: [ FruitDetailComponent ],
      providers: [
        { provide: FruitService, useValue: spy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' }}}}
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();

    fruitServiceSpy = TestBed.inject(FruitService) as jasmine.SpyObj<FruitService>;
    fruitServiceSpy.getFruits.and.returnValue(of([
      { id: 1, name: 'Apple', calories: 52, sugars: 10, carbohydrates: 14, fats: 0.2, proteins: 0.3, description: 'A sweet fruit', image: 'apple.jpg' }
    ]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load fruit details based on ID from route', () => {
    fixture.detectChanges();
    expect(component.fruit).toBeTruthy();
    expect(component.fruit.name).toEqual('Apple');
    expect(component.fruit.calories).toEqual(52);
  });

  it('should display fruit nutrition information', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain('Apple');
    expect(compiled.querySelector('.nutrition-values li').textContent).toContain('Calories: 52 kcal');
  });
});
