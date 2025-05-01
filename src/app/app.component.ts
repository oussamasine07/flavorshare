import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { HeroSectionComponent } from './components/partials/hero-section/hero-section.component';
import { CardWrapperComponent } from './components/partials/card-wrapper/card-wrapper.component';
import { SectionHeadingComponent } from './components/partials/section-heading/section-heading.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent, HeroSectionComponent, SectionHeadingComponent, CardWrapperComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flavorshare';
}
