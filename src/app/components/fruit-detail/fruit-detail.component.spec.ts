import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDetailComponent } from './fruit-detail.component';

describe('FruitDetailComponent', () => {
  let component: FruitDetailComponent;
  let fixture: ComponentFixture<FruitDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitDetailComponent]
    });
    fixture = TestBed.createComponent(FruitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
