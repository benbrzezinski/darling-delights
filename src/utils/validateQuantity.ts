const validateQuantity = (
  value: string | null | undefined,
  min = 0,
  max = 100
) => {
  const numberValue = Number(value);
  const validQuantity =
    Number.isInteger(numberValue) && numberValue > min && numberValue < max;
  return validQuantity ? value ?? "1" : "1";
};

export default validateQuantity;
