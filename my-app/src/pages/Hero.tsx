import { useParams } from "react-router-dom"

const Hero = () => {
  const { slug } = useParams()

  return (
    <div>
      {slug}
    </div>
  )
}

export default Hero
