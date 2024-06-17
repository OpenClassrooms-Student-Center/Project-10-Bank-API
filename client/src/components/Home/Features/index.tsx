import FeatureText, { FeatureTextProps } from "../FeatureText";

const Features = () => {
  const texts: FeatureTextProps[] = [{
    img: {
      src: 'icon-chat.png',
      alt: 'Chat Icon',
    },
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  }, {
    img: {
      src: 'icon-money.png',
      alt: 'Money Icon',
    },
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!'
  }, {
    img: {
      src: 'icon-security.png',
      alt: 'Security Icon',
    },
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.'
  },]

  return (
    <section className="flex-1 large:grid large:grid-cols-3">
      <h2 className="sr-only">Features</h2>
      {texts.map((text, index) => (
        <FeatureText key={index} img={text.img} title={text.title} text={text.text} />
      ))}
    </section>
  );
}

export default Features;
