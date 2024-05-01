import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../../type';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts('http://localhost:3000/products', {page: 0, perPage: 5}).subscribe((products: Products) => {
      console.log(products);
    })
  }
}
