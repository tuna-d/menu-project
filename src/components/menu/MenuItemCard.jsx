import { v4 as uuid } from "uuid"

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

  return (
    <div
      className={
        isGrid
          ? "font-noto flex flex-col items-center bg-neutral-100 px-2.5 py-4 rounded-lg border-2 shadow-lg min-h-50"
          : "flex font-noto items-center bg-neutral-100 mb-2 rounded-lg border-2 shadow-lg px-4 py-2 min-h-32"
      }
    >
      <div
        className={
          isGrid
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
          isGrid ? "flex flex-col grow" : "flex flex-col ms-4 flex-2/3"
        }
      >
        <span className={isGrid ? "mb-3 text-center" : ""}>{name}</span>
        <p
          className={
            isGrid
              ? "text-xs font-light line-clamp-3 text-center text-pretty mt-auto mb-2.5"
              : "text-xs font-light line-clamp-2 text-pretty mb-2"
          }
        >
          {desc}
        </p>
        <div
          className={
            isGrid ? "flex w-full justify-around mt-auto" : "flex gap-4"
          }
        >
          {showPrice(price)}
        </div>
      </div>
    </div>
  )
}
