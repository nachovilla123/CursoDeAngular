import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { retry } from 'rxjs/operators';

import { UpdateProductDTO ,CreateProductDTO, Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl : string = '/api/products';

  constructor(
    private http : HttpClient
  ) {}

  getAllProducts(limit? : number,offset? : number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit',limit);
      params = params.set('offset',offset);
    }

    return this.http.get<Product[]>(this.apiUrl , {params})
    .pipe(
      retry(3) // reinento con observer
    );
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getProductByPage(limit : number,offset : number){
    return this.http.get<Product[]>(`${this.apiUrl}`,{
      params: {limit,offset}
    });
  }

  create(dto : CreateProductDTO){ // data transfer offer
    return this.http.post<Product>(this.apiUrl,dto);
  }

  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
