import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MealResponse } from '../../interfaces/meal-response';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  httpClient = inject(HttpClient);

  getRecipes (url: string) {
    return this.httpClient.get<MealResponse>(url);
  }

}
