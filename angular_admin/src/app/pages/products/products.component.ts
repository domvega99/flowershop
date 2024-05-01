import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, Products } from '../../../type';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  constructor(
    private productService: ProductService
  ) {}

  displayedColumns: string[] = ['Code', 'Name', 'Retail Price', 'Product Price'];
  products: Product[] = [];

  ngOnInit() {
    this.productService.getProducts('http://localhost:3000/products', {page: 1, perPage: 0}).subscribe((product: Products) => {
      this.products = product.products
      console.log(product.products);
      
    })
  }
}
