import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FruitCardComponent } from './fruit-card.component';
import { By } from '@angular/platform-browser';

describe('FruitCardComponent', () => {
  let component: FruitCardComponent;
  let fixture: ComponentFixture<FruitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitCardComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitCardComponent);
    component = fixture.componentInstance;
    component.fruit = {
      id: 1,
      name: 'Apple',
      calories: 52,
      sugars: 10,
      carbohydrates: 14,
      image: ''
    };
    fixture.detectChanges();
  });

  it('should display fruit name and nutrition details', () => {
    const nameElement = fixture.debugElement.query(By.css('.fruit-name')).nativeElement;
    expect(nameElement.textContent).toContain('Apple');
    const caloriesElement = fixture.debugElement.query(By.css('.nutrition-values li:nth-child(1) span')).nativeElement;
    expect(caloriesElement.textContent).toContain('52');
  });

  it('should display default image if fruit image is not provided', () => {
    const imageElement = fixture.debugElement.query(By.css('.fruit-image img')).nativeElement;
    expect(imageElement.src).toContain('FruitImpact_Logo.png');
  });

  it('should navigate to detail page when View Details button is clicked', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.openDetails(); // Call openDetails directly
    expect(navigateSpy).toHaveBeenCalledWith(['/fruit', component.fruit.id]);
  });
  
});
