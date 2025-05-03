import { Component, inject, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Meal } from '../../../interfaces/meal';
import { MealResponse } from '../../../interfaces/meal-response';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-wrapper',
  standalone: true,
  imports: [
    NgFor,
    RecipeCardComponent
  ],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.css'
})
export class CardWrapperComponent implements OnInit {

  recipeService = inject(RecipeService);

  recipes: Meal[] | null = [];
  url: string = "https://www.themealdb.com/api/json/v1/1/search.php?s";

  ngOnInit(): void {
    this.recipeService.getRecipes(this.url).subscribe({
      next: (res: MealResponse) => {
        this.recipes = res.meals
      }
    });
  }
}
