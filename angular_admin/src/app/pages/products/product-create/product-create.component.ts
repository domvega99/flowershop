import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { ProductService } from '../../../services/product.service';
import { Product, Products } from '../../../../type';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.sass'
})


export class ProductCreateComponent {

  formData: any = {};

  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  displayedColumns: string[] = ['Code', 'Name', 'Retail Price', 'Product Price'];
  products: Product[] = [];

  ngOnInit() {
    
    this.productService.getProducts('https://friendly-burnell.74-208-7-200.plesk.page/products', {page: 1, perPage: 0}).subscribe((product: Products) => {
      this.products = product.products
      console.log(product.products);
    })
    
  }

  onSubmit() {
    this.http.post<Product>('https://friendly-burnell.74-208-7-200.plesk.page/products', this.formData)
      .subscribe(
        response => {
          console.log(response);
          // Handle success, maybe notify the user
        },
        error => {
          console.error(error);
          // Handle error, maybe notify the user
        }
      );
  }

}
