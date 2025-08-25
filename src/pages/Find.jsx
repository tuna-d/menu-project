import { useState, useEffect } from "react"

import TasteBox from "../components/find/TasteBox"
import CategoryBox from "../components/find/CategoryBox"
import Navbar from "../components/Navbar"
import BgImg from "../components/BgImg"

import menuItems from "../data/items"
import tastesData from "../data/tastes"

export default function Find() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tastes, setTastes] = useState([])
  const [showTastes, setShowTastes] = useState([])
  const [selectedTastes, setSelectedTastes] = useState([])
  const [clickCounter, setClickCounter] = useState(0)
  const [generalCategory, setGeneralCategory] = useState([
    { name: "İçkiler", isSelected: true },
    { name: "Soft İçecekler", isSelected: false },
    { name: "Yiyecekler", isSelected: false },
  ])

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

  return (
    <>
      <Navbar path="/" page="find" />
      <BgImg />
      <main className="font-noto h-screen pt-24 px-4 overflow-y-auto scroll-smooth w-screen">
        <div className="bg-[rgba(255,255,255,0.5)] px-3 py-1.5 shadow-2xl rounded-2xl mb-4">
          <h1 className="text-2xl mb-2 text-pretty text-center">
            Lezzet keşfetine hoş geldin.
          </h1>
          <p className="font-light text-sm mb-4">
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

        <input
          type="text"
          name="search"
          id="search"
          className="bg-[rgba(255,255,255,0.5)] px-3 py-1.5 shadow-2xl rounded-2xl w-full focus:outline-0 mb-4"
          placeholder="Bugün canın ne çekiyor?"
          value={searchTerm}
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
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 h-1/5 overflow-x-auto scroll-smooth no-scrollbar">
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
      </main>
    </>
  )
}
