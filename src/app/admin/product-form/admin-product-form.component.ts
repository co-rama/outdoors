import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../services/product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  categories: any[] = null;
  constructor(private productService: ProductService, private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (categories: any[]) => {
        this.categories = categories;
        }
    );
  }

  saveProduct(productForm: NgForm): void {
    this.productService.create(productForm.value);
  }
}
