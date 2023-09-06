import { IconContext } from "react-icons";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

interface IconClass {
  className: string;
}

const useIcons = () => {
  const User = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <AiOutlineUser />
    </IconContext.Provider>
  );

  const ShoppingCart = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <AiOutlineShoppingCart />
    </IconContext.Provider>
  );

  return { User, ShoppingCart };
};

export default useIcons;
