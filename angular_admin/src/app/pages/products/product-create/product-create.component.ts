import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { ProductService } from '../../../services/product.service';

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
  ) {}

  ngOnInit() {

  }

  onSubmit() {
    this.productService.addProduct(`products`, this.formData).subscribe(
      {
        next: (data) => {
          console.log(data)
        },
        error: (error) => {
          console.log(error)
        },
      }
    );
  }

}
