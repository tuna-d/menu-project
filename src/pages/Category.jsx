import { useEffect, useState } from "react"
import { useParams } from "react-router"

import Navbar from "../components/Navbar"
import BgImg from "../components/BgImg"
import MiniCategoryCard from "../components/menu/MiniCategoryCard"
import MenuItemCard from "../components/menu/MenuItemCard"

import categories from "../data/categories"
import menuItems from "../data/items"

const findCategoryName = (catId) => {
  const foundCat = categories.find((cat) => String(cat.id) === String(catId))
  return foundCat ? foundCat.name : undefined
}

const findItems = (currCat) => {
  const foundItems = menuItems.find((mi) => currCat === mi.category)
  return foundItems ? foundItems.items : undefined
}

export default function Category() {
  const { catId } = useParams()
  const [currentCat, setCurrentCat] = useState(() => findCategoryName(catId))

  useEffect(() => {
    const name = findCategoryName(catId)
    setCurrentCat(name)
  }, [catId])

  return (
    <>
      <Navbar path="/" />
      <BgImg />
      <main className="font-noto h-screen pt-24 px-4 overflow-y-auto scroll-smooth w-screen">
        <div className="flex w-full items-center">
          <h1 className="text-3xl">Menü</h1>
          <div className="ms-auto ">
            <button>btn-1</button>
            <button>btn-2</button>
          </div>
        </div>
        <div className="flex overflow-x-scroll no-scrollbar scroll-smooth my-6 gap-4">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {findItems(currentCat) &&
            findItems(currentCat).map((item) => {
              return (
                <MenuItemCard
                  key={item.id}
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                  price={item.price}
                />
              )
            })}
        </div>
      </main>
    </>
  )
}
