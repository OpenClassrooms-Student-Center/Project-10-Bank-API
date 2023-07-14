import chatIcon from '../assets/img/icon-chat.png'
import moneyIcon from '../assets/img/icon-money.png'
import securityIcon from '../assets/img/icon-security.png'
import { FeatureItem } from './FeatureItem.tsx'

export const Feature = () => {
  const features = [
    {
      title: 'You are our #1 priority',
      description:
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
      icon: { src: chatIcon, alt: 'Chat Icon', className: 'feature-icon' },
    },
    {
      title: 'More savings means higher rates',
      description:
        'The more you save with us, the higher your interest rate will be!',
      icon: { src: moneyIcon, alt: 'Money Icon', className: 'feature-icon' },
    },
    {
      title: 'Security you can trust',
      description:
        'We use top of the line encryption to make sure your data and money is always safe.',
      icon: {
        src: securityIcon,
        alt: 'Security Icon',
        className: 'feature-icon',
      },
    },
  ]
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature) => (
        <FeatureItem key={feature.title} feature={feature} />
      ))}
    </section>
  )
}
