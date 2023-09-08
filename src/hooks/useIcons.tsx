import { IconContext } from "react-icons";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BsTruck, BsChatHeart } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

interface IconClass {
  className: string;
}

const useIcons = () => {
  const Hamburger = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <RxHamburgerMenu />
    </IconContext.Provider>
  );

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

  const Truck = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BsTruck />
    </IconContext.Provider>
  );

  const Heart = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BsChatHeart />
    </IconContext.Provider>
  );

  const Payment = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdOutlinePayments />
    </IconContext.Provider>
  );

  return { Hamburger, User, ShoppingCart, Truck, Heart, Payment };
};

export default useIcons;
