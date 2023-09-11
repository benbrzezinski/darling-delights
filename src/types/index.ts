import { ProductType, ProductPlacement } from "./enums";

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  price: number;
  img: string;
  placement?: ProductPlacement;
}

export interface IconClass {
  className: string;
}
