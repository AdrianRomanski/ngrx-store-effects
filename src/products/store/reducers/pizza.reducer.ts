import {Pizza} from "../../models/pizza.model";
import {PizzaAction} from "../actions/pizza.action";

export interface PizzaState {
  data: Pizza[],
  loaded: boolean,
  loading: boolean
}

export const initialState = {
  // @ts-ignore
  data: [
    {
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      "id": 1
    },
  ],
  loaded: false,
  loading: false
};


export function reducer(
  // @ts-ignore
  state = initialState,
  action: PizzaAction
): PizzaState {

  switch (action.type) {
    case "[Products] Load Pizzas": {
      return {
        ...state,
        loading: true
      }
    }
    case "[Products] Load Pizzas Fail": {
      return {
        ...state,
        loading: false,
        loaded: true
      }
    }
    case "[Products] Load Pizzas Success": {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }

  return state
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
