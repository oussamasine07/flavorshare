import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipeDetailsComponent } from './components/pages/recipe-details/recipe-details.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "recipe-details",
        component: RecipeDetailsComponent
    }
];
