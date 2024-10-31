import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { FruitService } from 'src/app/services/fruit.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockFruitService: Partial<FruitService>;

  beforeEach(async () => {
    mockFruitService = {
      getFruits: () => of([
        { name: 'Apple', calories: 52 },
        { name: 'Banana', calories: 96 },
        { name: 'Cherry', calories: 50 }
      ])
    };

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule ],
      providers: [{ provide: FruitService, useValue: mockFruitService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load fruits on initialization', () => {
    expect(component.fruits.length).toBe(3);
  });

  it('should filter fruits based on search term', () => {
    component.searchTerm = 'Banana';
    component.searchFruits();
    expect(component.filteredFruits.length).toBe(1);
    expect(component.filteredFruits[0].name).toBe('Banana');
  });

  it('should sort fruits by name (A-Z)', () => {
    component.sortOption = 'nameAsc';
    component.sortFruits();
    expect(component.filteredFruits[0].name).toBe('Apple');
  });

  it('should sort fruits by calories (High to Low)', () => {
    component.sortOption = 'caloriesDesc';
    component.sortFruits();
    expect(component.filteredFruits[0].name).toBe('Banana');
  });
});
