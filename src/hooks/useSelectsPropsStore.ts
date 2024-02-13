import { useState } from "react";
import { SingleValue } from "react-select";
import { OptionType } from "../types";

const useSelectsPropsStore = () => {
  const [selectedStore, setSelectedStore] = useState("");

  const options: OptionType[] = [
    {
      value: "USA, NV, 89101, Las Vegas, 1234 Main Street, #18",
      label: "USA, NV, 89101, Las Vegas, 1234 Main Street, #18",
    },
    {
      value: "USA, IL, 60601, Chicago, 5678 Oak Avenue, #203",
      label: "USA, IL, 60601, Chicago, 5678 Oak Avenue, #203",
    },
    {
      value: "Brazil, RJ, 22050-012, Rio de Janeiro, Rua Copacabana, 432",
      label: "Brazil, RJ, 22050-012, Rio de Janeiro, Rua Copacabana, 432",
    },
    {
      value: "France, Paris Region, 75001, Paris, 56 Rue de la Seine, 180",
      label: "France, Paris Region, 75001, Paris, 56 Rue de la Seine, 180",
    },
    {
      value: "Poland, Mazowieckie, 00-123, Warsaw, ul. Nowa 15, 76B",
      label: "Poland, Mazowieckie, 00-123, Warsaw, ul. Nowa 15, 76B",
    },
    {
      value: "Russia, Western, 129090, Moscow, Prospekt Mira 25, 49Y",
      label: "Russia, Western, 129090, Moscow, Prospekt Mira 25, 49Y",
    },
    {
      value:
        "China, Republic of China, 100007, Beijing, 789 Dongcheng Street, 8088",
      label:
        "China, Republic of China, 100007, Beijing, 789 Dongcheng Street, 8088",
    },
    {
      value: "Japan, Kantō, 150-0002, Tokyo, Shibuya City, 2-chōme-19-12",
      label: "Japan, Kantō, 150-0002, Tokyo, Shibuya City, 2-chōme-19-12",
    },
  ];

  const handleSelect = (option: SingleValue<OptionType>) => {
    if (option) {
      setSelectedStore(option.value);
    }
  };

  const handleValue = () => {
    const option = options.find(({ value }) => value === selectedStore);

    if (option) return option;

    return {
      value: "",
      label: "Store Address",
    };
  };

  return { selectedStore, options, handleSelect, handleValue };
};

export default useSelectsPropsStore;
