import { Pizza } from "../../models/pizza.model";
import { PizzaAction } from "../actions";

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  // @ts-ignore
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  // @ts-ignore
  state = initialState,
  action: PizzaAction,
): PizzaState {
  switch (action.type) {
    case "[Products] Load Pizzas": {
      return {
        ...state,
        loading: true,
      };
    }
    case "[Products] Load Pizzas Fail": {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case "[Products] Load Pizzas Success": {
      const pizzas = action.payload;

      const entities = pizzas.reduce(
        (entities: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entities,
            [pizza.id]: pizza,
          };
        },
        {
          ...state.entities,
        },
      );
      return {
        ...state,
        entities,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
