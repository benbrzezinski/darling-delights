import { nanoid } from "nanoid";
import { Product } from "../types";
import { ProductType, ProductPlacement } from "../types/enums";

export const products: Product[] = [
  {
    id: nanoid(),
    type: ProductType.Necklace,
    name: "Radiance Necklace",
    price: 168.76,
    img: "https://www.dropbox.com/scl/fi/ucomu0wocl4usp4hqvncj/featured-product-1.jpg?rlkey=pvypw9yc2kjq9oa13y0wsoh73&dl=1",
    placement: ProductPlacement.Featured,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Exquisite Earrings",
    price: 125.28,
    img: "https://www.dropbox.com/scl/fi/y3q632hs3hdb76i3xpg0c/featured-product-2.jpg?rlkey=ryc42jnlqhbq94dgpht6kzw4p&dl=1",
    placement: ProductPlacement.Featured,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Delights Earrings",
    price: 323.71,
    img: "https://www.dropbox.com/scl/fi/okm6ym0gs1kmy5yue98ih/featured-product-3.jpg?rlkey=6pwcfv39ikwa51efb20tr0i2s&dl=1",
    placement: ProductPlacement.Featured,
  },
  {
    id: nanoid(),
    type: ProductType.Ring,
    name: "Shimmering Ring",
    price: 250.72,
    img: "https://www.dropbox.com/scl/fi/310dn899nfgzw3lf2xrt1/our-selection-product-1.jpg?rlkey=5f5o1pm8nascxwfywxeyeoe75&dl=1",
    placement: ProductPlacement.Selection,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Exquisite Earrings",
    price: 124.38,
    img: "https://www.dropbox.com/scl/fi/2aiiv9t9ztiag955zghzm/our-selection-product-2.jpg?rlkey=j2l0piqjcu1s4i2xha63ijtmy&dl=1",
    placement: ProductPlacement.Selection,
  },
  {
    id: nanoid(),
    type: ProductType.Earring,
    name: "Elegance Earrings",
    price: 450.89,
    img: "https://www.dropbox.com/scl/fi/uzalcg97pemhnugldkvbv/our-selection-product-3.jpg?rlkey=25ecebk62tapcp0fhkhdcoh2n&dl=1",
    placement: ProductPlacement.Selection,
  },
];
