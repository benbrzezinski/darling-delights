import { MouseEvent, RefObject } from "react";
import { SingleValue } from "react-select";
import { ProductType, ProductPlacement, FeedbackPlacement } from "./enums";

export type VerifyCreditCard = (
  name: "code" | "name" | "month" | "year" | "cvc",
  value: string,
  ref?: HTMLInputElement | null
) => boolean;

export interface Product {
  id: string;
  code: string;
  type: ProductType;
  name: string;
  price: number;
  img: string;
  size: string;
  quantity: string;
  color: {
    name: string;
    hex: string;
  };
  placement: ProductPlacement[];
}

export interface ProductPayload {
  id: string;
  size?: string;
  quantity?: string;
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
  openBasket: () => void;
  openFavourites: () => void;
}

export interface MobileNav {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

export interface Basket {
  isBasketOpen: boolean;
  closeBasket: () => void;
  closeBasketByBackdrop: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface Favourites {
  isFavouritesOpen: boolean;
  closeFavourites: () => void;
  closeFavouritesByBackdrop: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface SignForm {
  type: "login" | "register";
}

export interface Selects {
  options: OptionType[];
  handleSelect: (option: SingleValue<OptionType>) => void;
  handleValue: () => OptionType;
  width: string;
}

export interface Pagination {
  productsPerPage: 12 | 13;
}

export interface Notification {
  text: string;
  flexGrow?: number;
  paddingTop?: string;
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

export interface InputRefs {
  name: RefObject<HTMLInputElement>;
  code: RefObject<HTMLInputElement>;
  month: RefObject<HTMLInputElement>;
  year: RefObject<HTMLInputElement>;
  cvc: RefObject<HTMLInputElement>;
  blik1: RefObject<HTMLInputElement>;
  blik2: RefObject<HTMLInputElement>;
  blik3: RefObject<HTMLInputElement>;
  blik4: RefObject<HTMLInputElement>;
  blik5: RefObject<HTMLInputElement>;
  blik6: RefObject<HTMLInputElement>;
}

export interface LocationState {
  total: string;
  basket: Product[];
  fullName: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
}
