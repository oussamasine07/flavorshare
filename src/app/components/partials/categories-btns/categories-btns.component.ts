import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../interfaces/category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categories-btns',
  imports: [
    NgFor
  ],
  templateUrl: './categories-btns.component.html',
  styleUrl: './categories-btns.component.css'
})
export class CategoriesBtnsComponent {
  @Input() categories!: Category[] | null;

  @Output() categoryEmiter = new EventEmitter();

  onCategoryBtnClick (category: string) {
    this.categoryEmiter.emit(category)
  }
}
