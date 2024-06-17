export type FeatureTextProps = {
  img: {
    src: string,
    alt: string
  },
  title: string,
  text: string
}

const FeatureText = ({img, title, text}: FeatureTextProps) => {
  return (
    <div className="flex flex-col items-center p-10">
      <img className="w-25 border-10 border-blue-green box-content rounded-full p-4" src={`/src/assets/images/${img.src}`} alt={img.alt} />
      <h3 className="text-dark-grey text-xl font-bold mb-2 mt-4">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default FeatureText