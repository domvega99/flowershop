import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCreateComponent } from './pages/products/product-create/product-create.component';
import { PageComponent } from './pages/page/page.component';
import { PageCreateComponent } from './pages/page/page-create/page-create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/create', component: ProductCreateComponent },
    { path: 'pages', component: PageComponent },
    { path: 'pages/create', component: PageCreateComponent }
];
