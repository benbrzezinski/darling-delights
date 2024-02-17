import { useState } from "react";
import { SingleValue } from "react-select";
import { OptionType } from "../types";

const useSelectsPropsStore = () => {
  const [selectedStore, setSelectedStore] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const options: OptionType[] = [
    {
      value: "Australia, New South Wales, 2000, Sydney, Harbour St, 81",
      label: "Australia, New South Wales, 2000, Sydney, Harbour St, 81",
      coordinates: {
        lat: -33.87843,
        lng: 151.20307,
      },
    },
    {
      value: "Brazil, RJ, 20030-003, Rio de Janeiro, Av. Graça Aranha, 135",
      label: "Brazil, RJ, 20030-003, Rio de Janeiro, Av. Graça Aranha, 135",
      coordinates: {
        lat: -22.90841,
        lng: -43.17471,
      },
    },
    {
      value: "Canada, Ontario, M5H 2N2, Toronto, King St W, 121",
      label: "Canada, Ontario, M5H 2N2, Toronto, King St W, 121",
      coordinates: {
        lat: 43.64769,
        lng: -79.38299,
      },
    },
    {
      value:
        "China, Republic of China, 100031, Beijing, Xi Cheng Qu, 西交民巷17号",
      label:
        "China, Republic of China, 100031, Beijing, Xi Cheng Qu, 西交民巷17号",
      coordinates: {
        lat: 39.92289,
        lng: 116.37324,
      },
    },
    {
      value:
        "Egypt, Cairo Governorate, 4320013, Cairo, Al Azbakeya, Soliman El-Halaby 30",
      label:
        "Egypt, Cairo Governorate, 4320013, Cairo, Al Azbakeya, Soliman El-Halaby 30",
      coordinates: {
        lat: 30.049729,
        lng: 31.20503999131,
      },
    },
    {
      value: "France, Paris Region, 75001, Paris, 56 Rue de Seine, 180",
      label: "France, Paris Region, 75001, Paris, 56 Rue de Seine, 180",
      coordinates: {
        lat: 48.853995999719,
        lng: 2.337099022187,
      },
    },
    {
      value: "Japan, Kantō, 150-0002, Tokyo, Shibuya City, 2-chōme-19-12",
      label: "Japan, Kantō, 150-0002, Tokyo, Shibuya City, 2-chōme-19-12",
      coordinates: {
        lat: 35.659440432517,
        lng: 139.703023473846,
      },
    },
    {
      value: "Poland, Mazowieckie, 00-127, Warsaw, ul. Śliska, 3/8",
      label: "Poland, Mazowieckie, 00-127, Warsaw, ul. Śliska, 3/8",
      coordinates: {
        lat: 52.23238967463,
        lng: 21.001841603313,
      },
    },
    {
      value: "Russia, North, 129090, Moscow, Prospekt Mira 25, 49Y",
      label: "Russia, North, 129090, Moscow, Prospekt Mira 25, 49Y",
      coordinates: {
        lat: 55.779570759995,
        lng: 37.632455547381,
      },
    },
    {
      value: "South Africa, Western Cape, 8000, Cape Town, Adderley St, 28",
      label: "South Africa, Western Cape, 8000, Cape Town, Adderley St, 28",
      coordinates: {
        lat: -33.921287520731,
        lng: 18.423652762732,
      },
    },
    {
      value: "Sweden, Stockholm County, 111 20, Stockholm, Drottninggatan, 71A",
      label: "Sweden, Stockholm County, 111 20, Stockholm, Drottninggatan, 71A",
      coordinates: {
        lat: 59.3358879,
        lng: 18.0592731,
      },
    },
    {
      value: "UAE, Dubai, 337-1500, Sheikh Zayed Rd, Al Wasl, 6",
      label: "UAE, Dubai, 337-1500, Sheikh Zayed Rd, Al Wasl, 6",
      coordinates: {
        lat: 25.208941001726,
        lng: 55.233921224924,
      },
    },
    {
      value: "USA, IL, 60602, Chicago, Washington St, 77E",
      label: "USA, IL, 60602, Chicago, Washington St, 77E",
      coordinates: {
        lat: 41.88272400713,
        lng: -87.63059895841,
      },
    },
    {
      value: "USA, NV, 89101, Las Vegas, 1234 Main St, #18",
      label: "USA, NV, 89101, Las Vegas, 1234 Main St, #18",
      coordinates: {
        lat: 36.184275732777,
        lng: -115.13748,
      },
    },
  ];

  const handleSelect = (option: SingleValue<OptionType>) => {
    if (option) {
      setSelectedStore(option.value);

      if (option.coordinates) {
        setCoordinates(option.coordinates);
      }
    }
  };

  const handleValue = () => {
    const option = options.find(({ value }) => value === selectedStore);

    if (option) return option;

    return {
      value: selectedStore,
      label: "Store Address",
      coordinates,
    };
  };

  return { selectedStore, coordinates, options, handleSelect, handleValue };
};

export default useSelectsPropsStore;
