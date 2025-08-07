import { v4 as uuid } from "uuid"
import { useState } from "react"

export default function MenuItemCard({ image, name, price, desc, isGrid }) {
  const showPrice = (obj) => {
    const isObject = typeof obj === "object"
    if (isObject) {
      return Object.keys(obj).map((key) => {
        return (
          <div key={uuid()} className="flex flex-col items-center">
            <span className="text-xs font-light">{key}</span>
            <span className="font-semibold text-sm">₺{obj[key]}</span>
          </div>
        )
      })
    } else {
      return <span className="font-semibold">₺{obj}</span>
    }
  }

  const [isGrow, setIsGrow] = useState(false)

  const expand = () => {
    setIsGrow(true)
  }

  const shrink = () => {
    setIsGrow(false)
  }

  return (
    <div
      className={
        isGrow
          ? isGrid
            ? "font-noto flex flex-col items-center bg-neutral-100 px-2.5 py-4 rounded-lg border-2 shadow-lg min-h-50 col-span-2 relative"
            : "flex flex-col font-noto items-center bg-neutral-100 mb-2 rounded-lg border-2 shadow-lg px-4 py-2 min-h-32 relative"
          : isGrid
          ? "font-noto flex flex-col items-center bg-neutral-100 px-2.5 py-4 rounded-lg border-2 shadow-lg min-h-50 relative"
          : "flex font-noto items-center bg-neutral-100 mb-2 rounded-lg border-2 shadow-lg px-4 py-2 min-h-32 relative"
      }
      onClick={expand}
    >
      {isGrow && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            shrink()
          }}
          className="absolute top-2 right-2"
        >
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/material-rounded/50/delete-sign.png"
            alt="delete-sign"
          />
        </button>
      )}

      <div
        className={
          isGrow
            ? isGrid
              ? "w-40 h-40 rounded-full overflow-hidden mb-2.5 shadow-gray-400 shadow-lg"
              : "w-25 h-25 rounded-full overflow-hidden shadow-gray-400 shadow-lg mb-3"
            : isGrid
            ? "w-20 h-20 rounded-full overflow-hidden mb-2.5 shadow-gray-400 shadow-lg"
            : "w-15 h-15 rounded-full overflow-hidden shadow-gray-400 shadow-lg"
        }
      >
        <img
          src={image}
          alt={`${name} image`}
          className="object-center object-contain"
        ></img>
      </div>
      <div
        className={
          isGrow
            ? isGrid
              ? "flex flex-col grow"
              : "flex flex-col flex-2/3"
            : isGrid
            ? "flex flex-col grow"
            : "flex flex-col ms-4 flex-2/3"
        }
      >
        <span
          className={
            isGrow
              ? isGrid
                ? "mb-3 text-center text-xl"
                : "text-center text-xl"
              : isGrid
              ? "mb-3 text-center"
              : ""
          }
        >
          {name}
        </span>
        <p
          className={
            isGrow
              ? isGrid
                ? "text-sm font-light text-center text-pretty mt-auto mb-2.5"
                : "text-sm font-light text-center text-pretty mb-2"
              : isGrid
              ? "text-xs font-light line-clamp-3 text-center text-pretty mt-auto mb-2.5"
              : "text-xs font-light line-clamp-2 text-pretty mb-2"
          }
        >
          {desc}
        </p>
        <div
          className={
            isGrow
              ? isGrid
                ? "flex w-full mt-auto justify-center gap-4"
                : "flex gap-4 justify-center text-lg"
              : isGrid
              ? "flex w-full justify-center gap-4 mt-auto"
              : "flex gap-4"
          }
        >
          {showPrice(price)}
        </div>
      </div>
    </div>
  )
}
