import { nanoid } from "nanoid";
import { Feedback } from "../types";

const feedbacks: Feedback[] = [
  {
    id: nanoid(),
    author: "Anna Fernandez",
    country: "California",
    img: "https://i.ibb.co/k4KdnQ9/feedback-1.jpg",
    text: "The ring itself is stunning, with a beautiful design that catches the light and sparkles from every angle. The quality of the materials used is evident, as the ring feels substantial and durable. The gemstone is exquisite, with a vibrant color and exceptional clarity.",
  },
  {
    id: nanoid(),
    author: "Sophie Anderson",
    country: "Spain",
    img: "https://i.ibb.co/xFsc4yb/feedback-2.jpg",
    text: "Your jewelry collection is a true gem in the world of fashion. I recently bought a necklace, and it has become my go-to accessory for special occasions. The elegance and sophistication it adds to my outfits are beyond compare and the materials used are of the highest quality. I've already recommended your store to my friends, and I can't wait to add more pieces to my collection.",
  },
  {
    id: nanoid(),
    author: "David Smith",
    country: "China",
    img: "https://i.ibb.co/TKbYL2S/feedback-3.jpg",
    text: "I couldn't be happier with my purchase! The craftsmanship of the jewelry is truly outstanding. The attention to detail in the design is remarkable, and it's clear that each piece is made with love and care. The gemstones are breathtaking, with a brilliance that's hard to put into words. I've received numerous compliments, and I proudly tell everyone where I got my jewelry, your shop.",
  },
];

export default feedbacks;
