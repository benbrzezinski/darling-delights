import { ProductType, ProductPlacement } from "./enums";

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  price: number;
  img: string;
  placement: ProductPlacement[];
  inBusket: boolean;
}

export interface Feedback {
  id: string;
  author: string;
  country: string;
  img: string;
  text: string;
}

export interface OptionType {
  value: string;
  label: string;
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

export interface Pagination {
  productsPerPage: 12 | 13;
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export interface Loader {
  isVisible?: boolean;
}

export interface LocationState {
  from: string;
}
