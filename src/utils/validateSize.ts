import { sizes } from "../db/products";

const validateSize = (value: string | null | undefined) => {
  const validSize = sizes.find(size => size === value);
  return validSize ?? "48";
};

export default validateSize;
