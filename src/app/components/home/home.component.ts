import { Component, OnInit } from '@angular/core';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fruits: any[] = [];
  filteredFruits: any[] = [];
  searchTerm: string = '';
  sortOption: string = 'nameAsc'; // Default sort option

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
      this.filteredFruits = this.fruits;
      this.sortFruits(); // Initial sort
    });
  }

  searchFruits(): void {
    this.filteredFruits = this.fruits.filter(fruit =>
      fruit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.sortFruits(); // Apply sorting after filtering
  }

  sortFruits(): void {
    if (this.sortOption === 'nameAsc') {
      this.filteredFruits.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOption === 'nameDesc') {
      this.filteredFruits.sort((a, b) => b.name.localeCompare(a.name));
    } else if (this.sortOption === 'caloriesAsc') {
      this.filteredFruits.sort((a, b) => a.calories - b.calories);
    } else if (this.sortOption === 'caloriesDesc') {
      this.filteredFruits.sort((a, b) => b.calories - a.calories);
    }
  }
}
