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

  const [showGrid, setShowGrid] = useState(true)

  const [scroll, setScroll] = useState({ scrollTop: 0, showGoTop: false })

  const toggleGrid = () => {
    setShowGrid((prevState) => !prevState)
  }

  const handleScroll = (e) => {
    const { scrollTop } = e.target
    setScroll((prevState) => ({ ...prevState, scrollTop: scrollTop }))
  }

  useEffect(() => {
    setScroll((prevState) => {
      return {
        ...prevState,
        showGoTop: prevState.scrollTop > 80 ? true : false,
      }
    })
  }, [scroll.scrollTop])

  const scrollToTop = () => {
    document.querySelector("main").scrollTop = 0
  }

  return (
    <>
      <Navbar path="/" toggleGrid={toggleGrid} isGrid={showGrid} />
      <BgImg />
      <main
        className="font-noto h-screen overflow-y-auto scroll-smooth w-screen pt-24 pb-4"
        onScroll={handleScroll}
      >
        <div className="flex overflow-x-scroll no-scrollbar scroll-smooth mb-6 snap-x">
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

        <div
          className={
            showGrid
              ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4"
              : "px-4"
          }
        >
          {findItems(currentCat) &&
            findItems(currentCat).map((item) => {
              return (
                <MenuItemCard
                  key={item.id}
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                  price={item.price}
                  isGrid={showGrid}
                />
              )
            })}
        </div>
        <button
          className={
            scroll.showGoTop
              ? "rotate-90 bg-[rgba(255,255,255,0.4)] border-2 rounded-xl -bottom-30 transition-transform -translate-y-35 duration-200 ease-in right-5 fixed active:scale-90 px-1 py-0.5"
              : "rotate-90 bg-[rgba(255,255,255,0.4)] border-2 rounded-xl -bottom-30 translate-y-35 right-5 fixed duration-200 ease-in px-1 py-0.5"
          }
          onClick={scrollToTop}
        >
          <img
            width="38"
            height="38"
            src="https://img.icons8.com/ios/50/back--v1.png"
            alt="back--v1"
          />
        </button>
      </main>
    </>
  )
}
