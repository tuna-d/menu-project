import Navbar from "../components/Navbar"
import CategoryCard from "../components/menu/CategoryCard"

import categories from "../data/categories"
import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <Navbar path="/" />
      <img
        src="src/assets/images/drinks_bg.PNG"
        alt=""
        className="absolute -z-10 w-screen h-screen object-fit opacity-20"
      />
      <main className="font-noto h-screen pt-24 px-4 overflow-y-auto scroll-smooth w-screen">
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-2 mx-2 mb-4">
          {categories.map((cat) => {
            return (
              <Link key={cat.id} to={`/category/${cat.id}`}>
                <CategoryCard name={cat.name} img={cat.image} />
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}
