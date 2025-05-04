import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../interfaces/category';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-categories-btns',
  imports: [
    NgFor, NgClass
  ],
  templateUrl: './categories-btns.component.html',
  styleUrl: './categories-btns.component.css'
})
export class CategoriesBtnsComponent {
  @Input() categories!: Category[] | null;

  @Output() categoryEmiter = new EventEmitter();

  selectedCategory: string = "all";

  onCategoryBtnClick (category: string) {
    this.selectedCategory = category;
    this.categoryEmiter.emit(category)
  }
}
