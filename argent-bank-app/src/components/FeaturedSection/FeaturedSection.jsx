import icon1 from '../../assets/img/icon-chat.png'
import icon2 from '../../assets/img/icon-money.png'
import icon3 from '../../assets/img/icon-security.png'
import Features from '../../components/Features/Features';

function FeaturedSection() {
    return(
        <section className='features'>
        <h2 className="sr-only">Features</h2>
        <Features
          icon={icon1}
          title={"You are our #1 priority"}
          text="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes." />
        <Features
          icon={icon2}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!" />
        <Features
          icon={icon3}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
            is always safe." />
      </section>
    )
}

export default FeaturedSection