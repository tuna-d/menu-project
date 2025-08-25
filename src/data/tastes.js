import menuItems from "./items"

const tastesData = [
  {
    generalCat: "İçkiler",
    tastes: [],
  },
  {
    generalCat: "Soft İçecekler",
    tastes: [],
  },
  {
    generalCat: "Yiyecekler",
    tastes: [],
  },
]

const addTastes = (categoryName, arrayName) => {
  menuItems
    .find((item) => {
      return item.category === categoryName
    })
    .items.map((item) => {
      return item.taste
    })
    .map((taste) => {
      arrayName.push(...taste)
    })
}

const drinkTasteNames = []

addTastes("Şişe Bira", drinkTasteNames)
addTastes("Fıçı Bira", drinkTasteNames)
addTastes("Konyak", drinkTasteNames)
addTastes("Likör", drinkTasteNames)
addTastes("Mezcal", drinkTasteNames)
addTastes("Bunch The Cocktails", drinkTasteNames)
addTastes("Klasik Kokteyl", drinkTasteNames)
addTastes("Kırmızı Şarap", drinkTasteNames)
addTastes("Beyaz Şarap", drinkTasteNames)
addTastes("Roze Şarap", drinkTasteNames)
addTastes("Köpüklü Şarap", drinkTasteNames)
addTastes("Shot", drinkTasteNames)
addTastes("Viski", drinkTasteNames)
addTastes("Cin", drinkTasteNames)
addTastes("Votka", drinkTasteNames)
addTastes("Rom", drinkTasteNames)

const uniqueDrinkTasteNames = [...new Set(drinkTasteNames)]

uniqueDrinkTasteNames.map((taste) => {
  tastesData.find((t) => t.generalCat === "İçkiler").tastes.push(taste)
})

const softDrinkTasteNames = []

addTastes("Sıcak İçecek", softDrinkTasteNames)
addTastes("Soğuk İçecek", softDrinkTasteNames)

const uniqueSoftDrinkTasteNames = [...new Set(softDrinkTasteNames)]

uniqueSoftDrinkTasteNames.map((taste) => {
  tastesData.find((t) => t.generalCat === "Soft İçecekler").tastes.push(taste)
})

const foodTasteNames = []

addTastes("Yemek", foodTasteNames)
addTastes("Tatlı", foodTasteNames)
addTastes("Çerez", foodTasteNames)

const uniqueFoodTasteNames = [...new Set(foodTasteNames)]

uniqueFoodTasteNames.map((taste) => {
  tastesData.find((t) => t.generalCat === "Yiyecekler").tastes.push(taste)
})

export default tastesData
