import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.sass'
})


export class ProductCreateComponent {

  formData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // You can perform any HTTP initialization here
    // For example:
    this.http.get<any>('http://localhost:3000/products').subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    this.http.post<any>('http://localhost:3000/products', this.formData)
      .subscribe(
        response => {
          console.log(response);
          // handle success
        },
        error => {
          console.error(error);
          // handle error
        }
      );
  }

}
