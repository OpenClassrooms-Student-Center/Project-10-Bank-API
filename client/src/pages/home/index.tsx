import { FC } from "react";
import classes from "./index.module.scss";

type FeatureItemType = {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
};

const FeatureItem: FC<FeatureItemType> = ({
  icon: { src, alt },
  title,
  description,
}) => {
  return (
    <div className={classes["feature-item"]}>
      <img src={src} alt={alt} className={classes["feature-icon"]} />
      <h3 className={classes["feature-item-title"]}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const features: FeatureItemType[] = [
  {
    icon: {
      src: "./img/icon-chat.png",
      alt: "Chat Icon",
    },
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: {
      src: "./img/icon-money.png",
      alt: "Money Icon",
    },
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: {
      src: "./img/icon-security.png",
      alt: "Security Icon",
    },
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

const Home: FC = () => (
  <>
    <div className={classes["hero"]}>
      <section className={classes["hero-content"]}>
        <h2 className={classes["sr-only"]}>Promoted Content</h2>
        <p className={classes["subtitle"]}>No fees.</p>
        <p className={classes["subtitle"]}>No minimum deposit.</p>
        <p className={classes["subtitle"]}>High interest rates.</p>
        <p className={classes["text"]}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
    <section className={classes["features"]}>
      <h2 className={classes["sr-only"]}>Features</h2>
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </section>
  </>
);

export default Home;
