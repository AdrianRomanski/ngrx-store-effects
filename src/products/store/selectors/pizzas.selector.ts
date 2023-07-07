import { PizzaState } from "../reducers/pizza.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "../reducers";
import { getRouterState } from "../../../app/store";
import { Pizza } from "../../models/pizza.model";

const getPizzasEntities = (state: PizzaState) => state.entities;
const getPizzasLoading = (state: PizzaState) => state.loading;
const getPizzasLoaded = (state: PizzaState) => state.loaded;

export const getProductsState = createFeatureSelector("products");

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas,
);

export const getAllPizzas = createSelector(getPizzaState, getPizzasEntities);

export const getAllPizzasArray = createSelector(getAllPizzas, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});

export const getSelectedPizza = createSelector(
  getAllPizzas,
  getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[+router.state.params.pizzaId];
  },
);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  getPizzasLoaded,
);
export const getAllPizzasLoading = createSelector(
  getPizzaState,
  getPizzasLoading,
);
