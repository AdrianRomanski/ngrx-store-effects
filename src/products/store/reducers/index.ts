import {getPizzas, getPizzasLoaded, getPizzasLoading, PizzaState, reducer} from "./pizza.reducer";
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

const state = {
  products: {
    pizzas: {

    }
  }
}

export interface ProductsState {
  pizzas: PizzaState
}

export const reducers: ActionReducerMap<ProductsState>= {
  pizzas: reducer
}

export const getProductsState =
  createFeatureSelector('products');

export const getPizzaState = createSelector(
  getProductsState, (state: ProductsState) => state.pizzas
);

export const getAllPizzas  = createSelector(getPizzaState, getPizzas);
export const getAllPizzasLoaded  = createSelector(getPizzaState, getPizzasLoaded);
export const getAllPizzasLoading  = createSelector(getPizzaState, getPizzasLoading);
