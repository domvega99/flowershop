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
    this.http.get<any>('https://friendly-burnell.74-208-7-200.plesk.page/products').subscribe(data => {
      console.log(data);
    });
    
  }

  onSubmit() {
    this.http.post<any>('https://friendly-burnell.74-208-7-200.plesk.page/products', this.formData)
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
