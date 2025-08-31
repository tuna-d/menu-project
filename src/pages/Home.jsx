import Navbar from "../components/Navbar"
import CategoryCard from "../components/menu/CategoryCard"
import BgImg from "../components/BgImg"

import categories from "../data/categories"
import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <Navbar path="/" page="home" />
      <BgImg />
      <main className="font-noto h-screen pt-24 px-4 overflow-y-auto scroll-smooth w-screen">
        <div className="grid grid-cols-2 mx-2 gap-2 mb-2 items-center">
          <Link
            to="/findfor"
            className="bg-neutral-100 rounded-xl px-4 py-2 shadow-2xl h-full items-center flex justify-center active:scale-95 duration-150 ease-in"
          >
            <span className="text-xl text-center">Lezzet Keşfeti</span>
          </Link>
          <Link
            to="/spinthewheel"
            className="bg-neutral-100 items-center flex justify-center rounded-xl px-4 py-2 shadow-2xl active:scale-95 duration-150 ease-in"
          >
            <span className="text-xl text-center">Spin the Wheel</span>
          </Link>
        </div>
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
