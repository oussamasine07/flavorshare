import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MealResponse } from '../../interfaces/meal-response';
import { Meal } from '../../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  httpClient = inject(HttpClient);

  getRecipes (url: string) {
    return this.httpClient.get<MealResponse>(url);
  }

  getRecipeByIdMeal (id: string | null) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ id }`;
    return this.httpClient.get<MealResponse>(url);
  }

}
