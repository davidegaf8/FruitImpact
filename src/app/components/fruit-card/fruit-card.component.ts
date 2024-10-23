import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css'],
})
export class FruitCardComponent {
  @Input() fruit: any;

  constructor(private router: Router) {}

  openDetails(): void {
    this.router.navigate(['/fruit', this.fruit.id]); // Navigate to the fruit detail page with fruit ID
  }
    
}
