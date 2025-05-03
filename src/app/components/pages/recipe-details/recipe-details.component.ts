import { Component, inject, OnInit } from '@angular/core';
import { SectionHeadingComponent } from '../../partials/section-heading/section-heading.component';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Meal } from '../../../interfaces/meal';

@Component({
  selector: 'app-recipe-details',
  imports: [
    SectionHeadingComponent
  ],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  recipeService = inject(RecipeService);

  idMeal: string | null = this.activatedRoute.snapshot.paramMap.get("idMeal");
  recipe: Meal | null = null;


  ngOnInit(): void {
    this.recipeService.getRecipeByIdMeal(this.idMeal).subscribe({
      next: (recipeRes) => {
        this.recipe = recipeRes.meals[0]
        console.log(this.recipe)
      }
    });
  }

}
