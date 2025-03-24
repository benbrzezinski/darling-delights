import { Feedback } from "../types";
import { FeedbackPlacement } from "../types/enums";

const feedbacks: Feedback[] = [
  {
    id: "fb1",
    author: "Anna Fernandez",
    country: "California",
    img: "/assets/images/feedback-1.jpg",
    text: "The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the materials used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.",
    placement: FeedbackPlacement.Home,
  },
  {
    id: "fb2",
    author: "Sophie Anderson",
    country: "Spain",
    img: "/assets/images/feedback-2.jpg",
    text: "Your jewelry collection is a true gem in the world of fashion. I recently bought a necklace, and it has become my go-to accessory for special occasions. The elegance and sophistication it adds to my outfits are beyond compare and the materials used are of the highest quality. I've already recommended your store to my friends, and I can't wait to add more pieces to my collection.",
    placement: FeedbackPlacement.Home,
  },
  {
    id: "fb3",
    author: "David Smith",
    country: "China",
    img: "/assets/images/feedback-3.jpg",
    text: "I couldn't be happier with my purchase! The craftsmanship of the jewelry is truly outstanding. The attention to detail in the design is remarkable, and it's clear that each piece is made with love and care. The gemstones are breathtaking, with a brilliance that's hard to put into words. I've received numerous compliments, and I proudly tell everyone where I got my jewelry, your shop.",
    placement: FeedbackPlacement.Home,
  },
  {
    id: "fb4",
    author: "Lena Martinez",
    country: "Mexico",
    img: "/assets/images/feedback-4.jpg",
    text: "I recently purchased a bracelet from your store, and it exceeded my expectations. The design is elegant, and the attention to detail is remarkable. The bracelet is not only a stunning piece of jewelry but also incredibly comfortable to wear. I wear it every day, and it has quickly become a cherished accessory in my collection.",
    placement: FeedbackPlacement.Shop,
  },
  {
    id: "fb5",
    author: "Mohammed Ali",
    country: "United Arab Emirates",
    img: "/assets/images/feedback-5.jpg",
    text: "I recently received a gift from your store, and I was blown away by the quality and beauty of the jewelry. The necklace is a true work of art, and the gemstones are simply dazzling. It's evident that your store takes great pride in creating unique and stunning pieces. I'm grateful for this wonderful gift and will certainly explore your collection for future purchases.",
    placement: FeedbackPlacement.Shop,
  },
  {
    id: "fb6",
    author: "Alexandra Johnson",
    country: "Canada",
    img: "/assets/images/feedback-6.jpg",
    text: "Your jewelry store offers a unique selection of pieces that cater to a wide range of tastes. I bought a pair of earrings for a special occasion, and they added a touch of elegance to my outfit. The craftsmanship and quality of the materials are exceptional. I will definitely be a returning customer and highly recommend your store to others.",
    placement: FeedbackPlacement.Shop,
  },
];

export default feedbacks;
