import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2020,10,10);


  constructor(
    private storeService: StoreService, // esto es una inyeccion de dependencias
    private productsService : ProductsService
  ) {

      this.myShoppingCart = this.storeService.getMyShoppingCart();

    }

    ngOnInit(): void {
      this.productsService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
    }

  onAddToShoppingCart(product: Product){ // la logica sigue igual solo que se delega a un servicio
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
