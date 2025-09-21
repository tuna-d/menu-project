import { Link, useParams } from "react-router"
import { useState, useEffect } from "react"

const scrollToCeter = (element) => {
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  })
}

export default function MiniCategoryCard({ name, image, id }) {
  const { catId } = useParams()
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = (e) => {
    scrollToCeter(e.currentTarget)
  }
  useEffect(() => {
    if (id === catId) {
      setIsSelected(true)
      scrollToCeter(document.getElementById(id))
    } else {
      setIsSelected(false)
    }
  }, [catId])

  return (
    <div className="flex-shrink-0 border-2 rounded-xl overflow-hidden snap-center mx-2">
      <div
        className="p-2 bg-white select-none"
        onClick={handleClick}
        style={
          isSelected
            ? {
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                transition: "background-color 0.3s ease-in",
              }
            : {}
        }
        id={id}
      >
        <Link to={`/category/${id}`} className="flex items-center">
          <img
            src={image}
            alt={`${name} image`}
            className="w-7 h-7 object-cover object-center rounded-full"
          />
          <span className="whitespace-nowrap ps-2 font-montserrat">{name}</span>
        </Link>
      </div>
    </div>
  )
}
