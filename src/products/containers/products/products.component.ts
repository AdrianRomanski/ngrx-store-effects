import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services";
import { Store } from "@ngrx/store";
import {
  getAllPizzas,
  getAllPizzasArray,
  LoadPizzas,
  ProductsState,
} from "../../store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "products",
  styleUrls: ["products.component.scss"],
  template: `
    <div class="products">
      <div class="products__new">
        <a class="btn btn__ok" routerLink="./new"> New Pizza </a>
      </div>
      <div class="products__list">
        <div *ngIf="!(pizzas$ | async)?.length">
          No pizzas, add one to get started.
        </div>
        <pizza-item *ngFor="let pizza of pizzas$ | async" [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPizzas());
    this.pizzas$ = this.store.select(getAllPizzasArray);
  }
}
