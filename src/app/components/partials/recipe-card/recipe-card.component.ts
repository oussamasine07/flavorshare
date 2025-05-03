import { Component, Input } from '@angular/core';
import { Meal } from '../../../interfaces/meal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [ 
    RouterLink 
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {

  @Input() recipe!: Meal


}
