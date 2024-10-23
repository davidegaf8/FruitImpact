import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {
  fruit: any;

  constructor(private route: ActivatedRoute, private fruitService: FruitService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.fruitService.getFruits().subscribe(data => {
      this.fruit = data.find((fruit: any) => fruit.id === id);
    });
  }
}
