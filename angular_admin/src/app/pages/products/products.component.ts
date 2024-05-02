import { Component, ViewChild, AfterViewInit } from '@angular/core';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  totalRecords: number = 0;
  
  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productService
      .getProducts('https://friendly-burnell.74-208-7-200.plesk.page/products', { page, perPage })
      .subscribe((product: Products) => {
        this.products = product.products;
        this.totalRecords = 10;
        console.log(product.products);
      })

  }

  editProduct(product: Product) {
    console.log(product, 'Edit');
  }

  addProduct(product: Product) {
    console.log(product, 'Edit');
  }

  ngOnInit() {
    this.fetchProducts(1, 10);
  }
}
