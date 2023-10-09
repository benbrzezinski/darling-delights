import { IconContext } from "react-icons";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { BsTruck, BsChatHeart, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoLinkedinSquare, BiSearchAlt } from "react-icons/bi";
import {
  MdOutlinePayments,
  MdArrowForwardIos,
  MdArrowBackIosNew,
} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { GiBigDiamondRing } from "react-icons/gi";
import { IconClass } from "../types";

const useIcons = () => {
  const Hamburger = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <RxHamburgerMenu />
    </IconContext.Provider>
  );

  const Close = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <AiOutlineClose />
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

  const Envelope = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <PiEnvelopeSimpleLight />
    </IconContext.Provider>
  );

  const Twitter = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BsTwitter />
    </IconContext.Provider>
  );

  const Facebook = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaFacebook />
    </IconContext.Provider>
  );

  const LinkedIn = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BiLogoLinkedinSquare />
    </IconContext.Provider>
  );

  const YouTube = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BsYoutube />
    </IconContext.Provider>
  );

  const Search = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BiSearchAlt />
    </IconContext.Provider>
  );

  const Ring = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <GiBigDiamondRing />
    </IconContext.Provider>
  );

  const Greater = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdArrowForwardIos />
    </IconContext.Provider>
  );

  const Lower = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdArrowBackIosNew />
    </IconContext.Provider>
  );

  return {
    Hamburger,
    Close,
    User,
    ShoppingCart,
    Truck,
    Heart,
    Payment,
    Envelope,
    Twitter,
    Facebook,
    LinkedIn,
    YouTube,
    Search,
    Ring,
    Greater,
    Lower,
  };
};

export default useIcons;
