import { nanoid } from "nanoid";
import { Product } from "../types";
import { ProductType, ProductPlacement } from "../types/enums";

const products: Product[] = [
  {
    id: nanoid(),
    type: ProductType.Necklace,
    name: "Radiance Necklace",
    price: 168.76,
    img: "https://i.ibb.co/bKDgk5Z/featured-product-1.jpg",
    placement: ProductPlacement.Featured,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Exquisite Earrings",
    price: 125.28,
    img: "https://i.ibb.co/cgs89XN/featured-product-2.jpg",
    placement: ProductPlacement.Featured,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Delights Earrings",
    price: 323.71,
    img: "https://i.ibb.co/6XXjSfK/featured-product-3.jpg",
    placement: ProductPlacement.Featured,
  },
  {
    id: nanoid(),
    type: ProductType.Ring,
    name: "Shimmering Ring",
    price: 250.72,
    img: "https://i.ibb.co/jwTXrjQ/our-selection-product-1.jpg",
    placement: ProductPlacement.Selection,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Exquisite Earrings",
    price: 124.38,
    img: "https://i.ibb.co/2PKL4gz/our-selection-product-2.jpg",
    placement: ProductPlacement.Selection,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Elegance Earrings",
    price: 450.89,
    img: "https://i.ibb.co/HXvfbyM/our-selection-product-3.jpg",
    placement: ProductPlacement.Selection,
  },
];

export default products;
