import { SingleValue } from "react-select";
import { ProductType, ProductPlacement, FeedbackPlacement } from "./enums";

export interface Product {
  id: string;
  code: string;
  type: ProductType;
  name: string;
  price: number;
  img: string;
  color: {
    name: string;
    hex: string;
  };
  placement: ProductPlacement[];
  inBasket: boolean;
}

export interface Feedback {
  id: string;
  author: string;
  country: string;
  img: string;
  text: string;
  placement: FeedbackPlacement;
}

export interface Header {
  isSmallScreen: boolean;
  openMobileMenu: () => void;
}

export interface MobileNav {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

export interface Selects {
  options: OptionType[];
  handleSelect: (option: SingleValue<OptionType>) => void;
  handleValue: () => OptionType;
  width: string;
  afterWidth: string;
}

export interface Pagination {
  productsPerPage: 12 | 13;
}

export interface Notification {
  text: string;
}

export interface CollectionDetailsHeading {
  bgImg: string;
  title: string;
  text: string;
}

export interface Loader {
  isVisible?: boolean;
}

export interface IconClass {
  className: string;
}

export interface OptionType {
  value: string;
  label: string;
}

export interface OptionTypeObj {
  [key: string]: OptionType[];
}
