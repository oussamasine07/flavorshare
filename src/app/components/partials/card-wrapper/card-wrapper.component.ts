import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-card-wrapper',
  imports: [
    RecipeCardComponent
  ],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.css'
})
export class CardWrapperComponent {

}
