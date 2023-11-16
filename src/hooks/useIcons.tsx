import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineFileText } from "react-icons/ai";
import {
  BsCart2,
  BsTruck,
  BsChatHeart,
  BsTwitter,
  BsYoutube,
  BsInfoCircleFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { BiLogoLinkedinSquare, BiSearchAlt } from "react-icons/bi";
import {
  MdOutlinePayments,
  MdArrowForwardIos,
  MdArrowBackIosNew,
  MdAddShoppingCart,
  MdOutlineEdit,
  MdOutlineCalendarMonth,
} from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { FaFacebook, FaRegUser } from "react-icons/fa6";
import { GiBigDiamondRing } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { ImBin } from "react-icons/im";
import { TfiReceipt } from "react-icons/tfi";
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
      <HiOutlineUser />
    </IconContext.Provider>
  );

  const Customer = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaRegUser />
    </IconContext.Provider>
  );

  const ShoppingCart = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BsCart2 />
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

  const PaymentMethod = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdOutlinePayments />
    </IconContext.Provider>
  );

  const PaymentSecure = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <RiSecurePaymentFill />
    </IconContext.Provider>
  );

  const Envelope = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <PiEnvelopeSimpleLight />
    </IconContext.Provider>
  );

  const Phone = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FiPhoneCall />
    </IconContext.Provider>
  );

  const FileText = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <AiOutlineFileText />
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

  const AddShoppingCart = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdAddShoppingCart />
    </IconContext.Provider>
  );

  const EditPen = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdOutlineEdit />
    </IconContext.Provider>
  );

  const Bin = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <ImBin />
    </IconContext.Provider>
  );

  const Info = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BsInfoCircleFill />
    </IconContext.Provider>
  );

  const Calendar = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdOutlineCalendarMonth />
    </IconContext.Provider>
  );

  const Receipt = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <TfiReceipt />
    </IconContext.Provider>
  );

  const Dollar = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <BsCurrencyDollar />
    </IconContext.Provider>
  );

  const AddressCard = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaRegAddressCard />
    </IconContext.Provider>
  );

  return {
    Hamburger,
    Close,
    User,
    Customer,
    ShoppingCart,
    Truck,
    Heart,
    PaymentMethod,
    PaymentSecure,
    Envelope,
    Phone,
    FileText,
    Twitter,
    Facebook,
    LinkedIn,
    YouTube,
    Search,
    Ring,
    Greater,
    Lower,
    AddShoppingCart,
    EditPen,
    Bin,
    Info,
    Calendar,
    Receipt,
    Dollar,
    AddressCard,
  };
};

export default useIcons;
