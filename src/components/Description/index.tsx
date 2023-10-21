import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import scss from "./Description.module.scss";

const Description = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find(product => product.id === id);

  return product ? (
    <div className={scss.wrapper}>
      <section className={scss.descriptionBox}>
        <div>
          <p className={scss.text}>Description</p>
          <h2 className={scss.heading}>
            Introducing {product.name} - Elevate Your Style with Elegance!
          </h2>
        </div>
        <p className={scss.description}>
          Discover the epitome of timeless beauty and craftsmanship with our
          exquisite {product.name} creation. At Darling Delights, we take pride
          in offering you the finest jewelry pieces that exude charm and
          sophistication.
        </p>
        <h4 className={scss.title}>Product Description:</h4>
        <ul className={scss.features}>
          <li className={scss.featuresItem}>
            Crafted to perfection, each {product.name} is a masterpiece of
            artistry, combining modern design with classic elegance.
          </li>
          <li className={scss.featuresItem}>
            Our jewelry is made from the highest quality materials, including
            the finest metal alloys that ensure durability and lasting
            brilliance.
          </li>
          <li className={scss.featuresItem}>
            The attention to detail in every piece showcases our dedication to
            creating jewelry that resonates with your unique style.
          </li>
        </ul>
        <h4 className={scss.title}>Why Choose Darling Delights:</h4>
        <ul className={scss.features}>
          <li className={scss.featuresItem}>
            Unparalleled Quality: We are committed to using premium materials
            and maintaining the highest quality standards in our jewelry.
          </li>
          <li className={scss.featuresItem}>
            Expert Craftsmanship: Our skilled artisans bring years of experience
            and expertise to every piece, ensuring it&apos;s a work of art.
          </li>
          <li className={scss.featuresItem}>
            Wide Variety: Explore a wide range of designs to find the perfect
            piece that suits your individuality.
          </li>
          <li className={scss.featuresItem}>
            Competitive Pricing: We offer our exquisite jewelry at prices that
            provide exceptional value for your investment.
          </li>
          <li className={scss.featuresItem}>
            Customer Satisfaction: Your happiness is our priority, and we go the
            extra mile to ensure a seamless shopping experience.
          </li>
        </ul>
        <p className={scss.description}>
          Elevate your style and express your individuality with {product.name}{" "}
          from Darling Delights. Our jewelry pieces are not just accessories;
          they are a reflection of your personality, a symbol of your taste, and
          a testament to your appreciation for the finer things in life. Explore
          our {product.name} creation today and experience the difference in
          quality, craftsmanship, and style that only Darling Delights can
          offer.
        </p>
      </section>
    </div>
  ) : null;
};

export default Description;
