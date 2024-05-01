import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface PaginationParams {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
}

export interface Products {
    items: Product[]
    total: number;
    page: number;
    perPage: number;
}

export interface Product {
  id: number;
  product_name: string;
  description: string;
  slug: string;
  product_code: string;
  product_group: string;
  sizes: Size[];
  colors: Color[];
  varieties: Variety[];
  delivery_type: DeliveryType[];
  retail_price: number;
  retail_discount_price: number;
  product_price: number;
  cross_sell: number[];
  photos: Photo[];
}

export interface Size {
  id: number;
  size_name: string;
}

export interface Color {
  id: number;
  color_name: string;
}

export interface Variety {
  id: number;
  variety_name: string;
}

export interface DeliveryType {
  id: number;
  delivery_type_name: string;
}

export interface Photo {
  id: number;
  file_name: string;
  path_name: string;
}
