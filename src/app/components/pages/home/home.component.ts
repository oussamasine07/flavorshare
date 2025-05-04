import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../partials/hero-section/hero-section.component';
import { SectionHeadingComponent } from '../../partials/section-heading/section-heading.component';
import { CardWrapperComponent } from '../../partials/card-wrapper/card-wrapper.component';
import { CategoriesBtnsComponent } from '../../partials/categories-btns/categories-btns.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent, SectionHeadingComponent, CardWrapperComponent,
    CategoriesBtnsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
