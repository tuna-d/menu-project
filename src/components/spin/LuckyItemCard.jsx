import { v4 as uuid } from "uuid"

export default function LuckyItemCard({
  image,
  name,
  desc,
  price,
  removeLuckyItem,
}) {
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
    <div className="font-noto flex flex-col items-center bg-neutral-100 px-2.5 py-4 rounded-lg border-2 shadow-lg relative mb-4">
      <button onClick={removeLuckyItem} className="absolute top-2 right-2">
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/material-rounded/50/delete-sign.png"
          alt="delete-sign"
        />
      </button>

      <div className="w-25 h-25 rounded-full overflow-hidden mb-2.5 shadow-gray-400 shadow-lg">
        <img
          src={image}
          alt={`${name} image`}
          className="object-center object-contain"
        ></img>
      </div>
      <div className="flex flex-col">
        <span className="mb-3 text-center text-xl">{name}</span>
        {desc && (
          <p className="text-sm font-light text-center text-pretty mt-auto mb-2.5">
            {desc}
          </p>
        )}
        <div className="flex w-full mt-auto justify-center gap-4">
          {showPrice(price)}
        </div>
      </div>
    </div>
  )
}
