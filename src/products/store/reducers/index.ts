import { PizzaState, reducer } from "./pizza.reducer";
import { ActionReducerMap } from "@ngrx/store";

const state = {
  products: {
    pizzas: {},
  },
};

export interface ProductsState {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: reducer,
};
