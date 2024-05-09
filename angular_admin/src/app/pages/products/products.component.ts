import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, Products } from '../../../type';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule, MatInputModule, MatIconModule, MatRippleModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  constructor(
    private productService: ProductService
  ) {}

  displayedColumns: string[] = ['Code', 'Name', 'Retail Price', 'Product Price'];
  products: Product[] = [];


  totalRecords: number = 0;
  
  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productService
      .getProducts('products', { page, perPage })
      .subscribe({
        next: (data: Products) => {
          this.products = data.products;
          this.totalRecords = 10;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  editProduct(product: Product, id: number) {
    this.productService.editProduct(`products/${id}`, product).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.fetchProducts(1, 10);
        },
        error: (error) => {
          console.log(error)
        },
      }
    );
  }

  deleteProduct(product: Product, id: number) {
    this.productService.editProduct(`products/${id}`, product).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.fetchProducts(1, 10);
        },
        error: (error) => {
          console.log(error)
        },
      }
    );
  }

  addProduct(product: Product) {
    this.productService.addProduct(`products`, product).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.fetchProducts(1, 10);
        },
        error: (error) => {
          console.log(error)
        },
      }
    );
  }

  ngOnInit() {
    this.fetchProducts(1, 10);
  }
}
