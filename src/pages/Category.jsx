import Navbar from "../components/Navbar"
import BgImg from "../components/BgImg"
import MiniCategoryCard from "../components/menu/MiniCategoryCard"

import categories from "../data/categories"
import menuItems from "../data/items"

export default function Category() {
  return (
    <>
      <Navbar path="/" />
      <BgImg />
      <main className="font-noto h-screen pt-24 px-4 overflow-y-auto scroll-smooth w-screen">
        <div className="flex justify-between">
          <h1 className="text-3xl">Menü</h1>
          <div>
            <button>btn-1</button>
            <button>btn-2</button>
          </div>
        </div>
        <div className="flex overflow-x-scroll no-scrollbar scroll-smooth my-6 gap-4 ">
          {categories.map((cat) => {
            return (
              <MiniCategoryCard
                name={cat.name}
                image={cat.image}
                key={cat.id}
                id={cat.id}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}
