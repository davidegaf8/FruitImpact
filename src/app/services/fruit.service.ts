import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  apiUrl = 'https://fruity-vice-default-rtdb.europe-west1.firebasedatabase.app/fruits.json';
  private fruits: any = [];
  constructor(private http: HttpClient) { }

  getFruits(): Observable<any> {
    return this.http.get(this.apiUrl);
}

}
