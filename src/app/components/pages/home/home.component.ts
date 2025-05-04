import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../partials/hero-section/hero-section.component';
import { SectionHeadingComponent } from '../../partials/section-heading/section-heading.component';
import { CardWrapperComponent } from '../../partials/card-wrapper/card-wrapper.component';
import { CategoriesBtnsComponent } from '../../partials/categories-btns/categories-btns.component';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent, SectionHeadingComponent, CardWrapperComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  recipeService = inject(RecipeService);

  categories: Category[] | null = [];

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe({
      next: (categoriesRes) => {
        this.categories = categoriesRes.categories
      }
    });
  }

}
