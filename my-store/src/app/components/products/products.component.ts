import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import {StoreService} from '../../services/store.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;


  products: Product[] = [];

  constructor(
    private storeService: StoreService // esto es una inyeccion de dependencias
  ) {

      this.myShoppingCart = this.storeService.getMyShoppingCart();

    }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){ // la logica sigue igual solo que se delega a un servicio
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
