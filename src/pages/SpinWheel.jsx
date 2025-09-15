import { useState, useEffect } from "react"

import Navbar from "../components/Navbar"
import BgImg from "../components/BgImg"
import SearchBar from "../components/find/SearchBar"
import MenuItemCard from "../components/menu/MenuItemCard"
import MiniItemCard from "../components/spin/MiniItemCard"
import Wheel from "../components/spin/Wheel"
import LuckyItemCard from "../components/spin/LuckyItemCard"

import menuItems from "../data/items"

const allItems = () => {
  const findItems = menuItems.map((item) => item.items)
  const itemsArr = []
  findItems.map((fi) =>
    fi.map((item) => itemsArr.push({ ...item, isSelected: false }))
  )

  for (let i = 0; i < 5; i++) {
    const randNum = Math.floor(Math.random() * itemsArr.length)
    itemsArr[randNum] = { ...itemsArr[randNum], isSelected: true }
  }

  return itemsArr
}
export default function SpinWheel() {
  const [search, setSearch] = useState("")
  const [items, setItems] = useState(allItems())
  const [showItems, setShowItems] = useState(allItems())
  const [selectedItems, setSelectedItems] = useState([])
  const [scroll, setScroll] = useState({ scrollTop: 0, showGoTop: false })
  const [luckyItem, setLuckyItem] = useState()

  const handleScroll = (e) => {
    const { scrollTop } = e.target
    setScroll((prevState) => ({ ...prevState, scrollTop: scrollTop }))
  }

  useEffect(() => {
    setScroll((prevState) => {
      return {
        ...prevState,
        showGoTop: prevState.scrollTop > 10 ? true : false,
      }
    })
  }, [scroll.scrollTop])

  const scrollToTop = () => {
    document.querySelector("main").scrollTop = 0
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSelect = (name) => {
    setShowItems((prevState) => {
      return prevState.map((item) =>
        item.name === name ? { ...item, isSelected: !item.isSelected } : item
      )
    })
    setSearch("")
  }

  const handleClick = (id) => {
    setShowItems((prevState) => {
      return prevState.map((item) => {
        return item.id === id ? { ...item, isSelected: false } : item
      })
    })
  }

  useEffect(() => {
    const nextShowItems = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    setShowItems(nextShowItems)
  }, [search])

  useEffect(() => {
    const selectedItems = showItems.filter((item) => item.isSelected === true)
    setSelectedItems(selectedItems)
  }, [showItems])

  const selectLuckyItem = (item) => {
    setLuckyItem(item)
  }

  const removeLuckyItem = () => {
    setLuckyItem("")
  }

  const findLuckyItem = (itemName) => {
    if (itemName && itemName !== "") {
      const foundItem = items.find((item) => item.name === itemName)
      return (
        <LuckyItemCard
          name={foundItem.name}
          desc={foundItem.desc}
          price={foundItem.price}
          image={foundItem.image}
          removeLuckyItem={removeLuckyItem}
        />
      )
    }
  }

  return (
    <>
      <Navbar path="/" page="spin" />
      <BgImg />
      <main
        className="font-noto h-screen pt-24 px-4 overflow-y-auto scroll-smooth w-screen"
        onScroll={handleScroll}
      >
        {selectedItems.length >= 2 ? (
          <Wheel
            selectedItems={selectedItems}
            selectLuckyItem={selectLuckyItem}
          />
        ) : (
          <h1 className="text-center bg-[rgba(255,255,255,0.5)] px-3 py-1.5 shadow-2xl rounded-2xl w-full focus:outline-0 mb-4">
            Lütfen en az 2 ürün seçiniz.
          </h1>
        )}
        {findLuckyItem(luckyItem)}
        {selectedItems.length !== 0 && (
          <div className="mb-4 max-h-1/4 overflow-x-auto scroll-smooth">
            {selectedItems.map((item) => {
              return (
                <MiniItemCard
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  onClick={() => handleClick(item.id)}
                />
              )
            })}
          </div>
        )}

        <SearchBar
          placeholder="Bugün canın ne çekiyor?"
          value={search}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {showItems.map((item) => {
            return (
              <MenuItemCard
                key={item.id}
                name={item.name}
                desc={item.desc}
                image={item.image}
                price={item.price}
                isGrid={true}
                isSelected={item.isSelected}
                needGrow={false}
                handleSelect={() => handleSelect(item.name)}
              />
            )
          })}
        </div>
        <button
          className={
            scroll.showGoTop
              ? "rotate-90 bg-[rgba(255,255,255,0.4)] border-2 rounded-xl -bottom-30 transition-transform -translate-y-35 duration-150 ease-in-out right-5 fixed active:scale-90 px-1 py-0.5"
              : "rotate-90 bg-[rgba(255,255,255,0.4)] border-2 rounded-xl -bottom-30 translate-y-35 right-5 fixed duration-150 ease-in-out px-1 py-0.5"
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
