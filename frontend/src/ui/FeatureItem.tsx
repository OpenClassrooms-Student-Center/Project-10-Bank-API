export const FeatureItem = ({
  feature,
}: {
  feature: {
    title: string
    description: string
    icon: {
      src: string
      alt: string
      className: string
    }
  }
}) => {
  return (
    <div className="feature-item">
      <img
        src={feature.icon.src}
        alt={feature.icon.alt}
        className={feature.icon.className}
      />
      <h3 className="feature-item-title">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  )
}
