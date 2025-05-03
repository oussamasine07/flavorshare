import { Component, inject, OnInit } from '@angular/core';
import { SectionHeadingComponent } from '../../partials/section-heading/section-heading.component';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Meal } from '../../../interfaces/meal';
import { NgFor } from '@angular/common';
import { YtIdPipe } from '../../../cutomPipes/youtube/yt-id.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-details',
  imports: [
    NgFor, YtIdPipe,
    SectionHeadingComponent
  ],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  recipeService = inject(RecipeService);
  sanitizer = inject(DomSanitizer);
  safeYouTubeUrl?: SafeResourceUrl;

  idMeal: string | null = this.activatedRoute.snapshot.paramMap.get("idMeal");
  recipe: Meal | null = null;
  gradiants: string[] = [];


  ngOnInit(): void {
    this.recipeService.getRecipeByIdMeal(this.idMeal).subscribe({
      next: (recipeRes) => {
        let idx: number = 1;
        this.recipe = recipeRes.meals[0]
        const ytbUrl = this.recipe?.strYoutube.split("?v=")[1];
        if (ytbUrl) {
          this.safeYouTubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${ytbUrl}`);
          console.log(this.safeYouTubeUrl)
        }
        while (this.recipe[`strIngredient${idx}` as keyof Meal] !== undefined && this.recipe[`strIngredient${idx}` as keyof Meal]?.trim() !== "") {
          this.gradiants.push(this.recipe[`strMeasure${idx}` as keyof Meal] + " " + this.recipe[`strIngredient${idx}` as keyof Meal])
          idx++
        }
        
      }
    });
  }

}
