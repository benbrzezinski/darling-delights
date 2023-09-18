import { ProductType, ProductPlacement } from "./enums";

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  price: number;
  img: string;
  placement: ProductPlacement;
}

export interface Feedback {
  id: string;
  author: string;
  country: string;
  img: string;
  text: string;
}

export interface Action {
  payload: string;
  type: string;
}

export interface IconClass {
  className: string;
}

export interface Header {
  isSmallScreen: boolean;
  openMobileMenu: () => void;
}

export interface MobileNav {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

export interface Loader {
  isVisible?: boolean;
}
