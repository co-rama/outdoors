import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
products = [];
columnsToDisplay = ['Title', 'Category', 'Price'];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

}
