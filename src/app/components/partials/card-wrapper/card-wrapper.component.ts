import { Component, inject, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Meal } from '../../../interfaces/meal';
import { MealResponse } from '../../../interfaces/meal-response';
import { NgFor } from '@angular/common';
import { CategoriesBtnsComponent } from '../categories-btns/categories-btns.component';
import { Category } from '../../../interfaces/category';
import { CategoryResponse } from '../../../interfaces/category-response';

@Component({
  selector: 'app-card-wrapper',
  standalone: true,
  imports: [
    NgFor,
    RecipeCardComponent, CategoriesBtnsComponent
  ],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.css'
})
export class CardWrapperComponent implements OnInit {

  recipeService = inject(RecipeService);

  categories: Category[] | null = []
  recipes: Meal[] | null = [];
  url: string = "https://www.themealdb.com/api/json/v1/1/search.php?s";

  ngOnInit(): void {
    this.recipeService.getRecipes(this.url).subscribe({
      next: (res: MealResponse) => {
        this.recipes = res.meals
      }
    });
    this.recipeService.getCategories().subscribe({
      next: ( res: CategoryResponse ) => {
        this.categories = res.categories;
      }
    });
  }

  getCategoryRecipes (category: string) {
    const url = category == "all" ? "https://www.themealdb.com/api/json/v1/1/search.php?s" : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    this.recipeService.getRecipesByCategory(url).subscribe({
      next: (res) => {
        this.recipes = res.meals;
      }
    });
  }
}
