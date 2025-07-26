import { useParams } from "react-router"

import Navbar from "../components/Navbar"

import categories from "../data/categories"
import menuItems from "../data/items"

export default function Category() {
  const { catId } = useParams()
  return (
    <>
      <Navbar path="/" />
      <div>
        <h1>Category: {catId}</h1>
        {/* {menuItems.map((mi) => {
          return mi.items.map((i) => {
            return (
              <>
                <h2>{i.name}</h2>
                <img src={i.image} alt="" />
              </>
            )
          })
        })} */}
      </div>
    </>
  )
}
