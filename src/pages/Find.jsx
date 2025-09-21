import { useState, useEffect } from "react"

import TasteBox from "../components/find/TasteBox"
import CategoryBox from "../components/find/CategoryBox"
import Navbar from "../components/Navbar"
import BgImg from "../components/BgImg"
import MenuItemCard from "../components/menu/MenuItemCard"
import SearchBar from "../components/find/SearchBar"

import menuItems from "../data/items"
import tastesData from "../data/tastes"

export default function Find() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tastes, setTastes] = useState([])
  const [showTastes, setShowTastes] = useState([])
  const [selectedTastes, setSelectedTastes] = useState([])
  const [clickCounter, setClickCounter] = useState(0)
  const [generalCategory, setGeneralCategory] = useState([
    {
      name: "İçkiler",
      isSelected: true,
      subCategory: [
        "Şişe Bira",
        "Fıçı Bira",
        "Konyak",
        "Likör",
        "Mezcal",
        "Bunch The Cocktails",
        "Klasik Kokteyl",
        "Kırmızı Şarap",
        "Beyaz Şarap",
        "Roze Şarap",
        "Köpüklü Şarap",
        "Shot",
        "Viski",
        "Cin",
        "Votka",
        "Rom",
      ],
    },
    {
      name: "Soft İçecekler",
      isSelected: false,
      subCategory: ["Sıcak İçecek", "Soğuk İçecek"],
    },
    {
      name: "Yiyecekler",
      isSelected: false,
      subCategory: ["Yemek", "Tatlı", "Çerez"],
    },
  ])
  const [filteredItems, setFilteredItems] = useState([])

  const selectedCat = generalCategory.find(
    (cat) => cat.isSelected === true
  ).name

  useEffect(() => {
    const tasteArr = []
    tastesData
      .find((t) => t.generalCat === selectedCat)
      .tastes.map((tasteName) => {
        tasteArr.push({ name: tasteName, isSelected: false })
      })
    setTastes(tasteArr)
  }, [])

  useEffect(() => {
    setShowTastes(tastes)
  }, [tastes])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const nextShowTastes = tastes.filter((t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setShowTastes(nextShowTastes)
  }, [searchTerm])

  useEffect(() => {
    const nextShowTastes = tastes.filter((t) => {
      return t.isSelected === false
    })
    const nextSelectedTastes = tastes.filter((t) => {
      return t.isSelected === true
    })
    setShowTastes(nextShowTastes)
    setSelectedTastes(nextSelectedTastes)
  }, [clickCounter])

  const handleClickTaste = (name) => {
    setTastes((prevState) => {
      return prevState.map((t) =>
        t.name.toLowerCase() === name.toLowerCase()
          ? { ...t, isSelected: !t.isSelected }
          : t
      )
    })
    setSearchTerm("")
    setClickCounter((prevCount) => prevCount + 1)
  }

  const handleClickCategory = (name) => {
    setGeneralCategory((prevState) =>
      prevState.map((cat) =>
        cat.name.toLowerCase() === name.toLowerCase()
          ? { ...cat, isSelected: true }
          : { ...cat, isSelected: false }
      )
    )
  }

  useEffect(() => {
    const tasteArr = []
    tastesData
      .find((t) => t.generalCat === selectedCat)
      .tastes.map((tasteName) => {
        tasteArr.push({ name: tasteName, isSelected: false })
      })
    setTastes(tasteArr)
    setSelectedTastes([])
  }, [selectedCat])

  useEffect(() => {
    const subCategory = generalCategory.find(
      (gen) => gen.name === selectedCat
    ).subCategory

    const itemsInCat = subCategory.flatMap((sub) => {
      const it = menuItems.find((mi) => mi.category === sub).items
      return it
    })

    const selectedTasteNames = selectedTastes.map((taste) => taste.name)

    const filterdItemsArr = itemsInCat.filter((it) => {
      return it.taste.some((t) => selectedTasteNames.includes(t))
    })
    setFilteredItems(filterdItemsArr)
  }, [selectedTastes])

  return (
    <>
      <Navbar path="/" page="find" />
      <BgImg />
      <main className="font-montserrat h-screen pt-24 px-4 overflow-y-auto scroll-smooth w-screen">
        <div className="bg-[rgba(255,255,255,0.5)] px-3 py-1.5 shadow-2xl rounded-2xl mb-4">
          <h1 className="text-2xl mb-2 text-pretty text-center">
            Lezzet keşfetine hoş geldin.
          </h1>
          <p className="font-light text-sm mb-2">
            Keşfetmek istediğin tatları seç, sana özel lezzetler sunalım.
          </p>
          <p className="font-light text-sm text-center">
            Önceklikle bir kategori seçin.
          </p>
        </div>

        <div className="mb-4 flex justify-between">
          {generalCategory.map((cat, index) => {
            return (
              <CategoryBox
                name={cat.name}
                isSelected={cat.isSelected}
                key={index}
                handleClick={() => handleClickCategory(cat.name)}
              />
            )
          })}
        </div>
        <SearchBar
          value={searchTerm}
          placeholder="Bugün canın ne çekiyor?"
          onChange={handleChange}
        />
        {selectedTastes.length !== 0 && (
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 mb-4">
            {selectedTastes.map((taste, index) => {
              return (
                <TasteBox
                  name={taste.name}
                  isSelected={taste.isSelected}
                  key={index}
                  handleClick={() => handleClickTaste(taste.name)}
                />
              )
            })}
          </div>
        )}
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 h-1/8 overflow-x-auto scroll-smooth no-scrollbar mb-4">
          {showTastes.map((taste, index) => {
            return (
              <TasteBox
                name={taste.name}
                key={index}
                handleClick={() => handleClickTaste(taste.name)}
              />
            )
          })}
        </div>
        <div className="px-4 overflow-x-auto scroll-smooth h-68">
          {filteredItems.length !== 0 &&
            filteredItems.map((item) => {
              return (
                <MenuItemCard
                  key={item.id}
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                  price={item.price}
                  isGrid={false}
                  tastes={item.taste}
                />
              )
            })}
        </div>
      </main>
    </>
  )
}
