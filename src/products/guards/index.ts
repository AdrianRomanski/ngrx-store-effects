import { PizzasGuard } from "./pizza.guard";
import { PizzaExistsGuard } from "./pizza-exists.guard";
import { ToppingsGuard } from "./toppings.guard";

export const guards: any[] = [PizzasGuard, PizzaExistsGuard, ToppingsGuard];

export * from "./pizza.guard";
export * from "./pizza-exists.guard";
export * from "./toppings.guard";
