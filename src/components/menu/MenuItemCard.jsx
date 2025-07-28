export default function MenuItemCard({ image, name, price, desc }) {
  const showPrice = (obj) => {
    const isObject = typeof obj === "object"
    if (isObject) {
      return Object.keys(obj).map((key) => {
        return (
          <div className="flex flex-col items-center">
            <span key={1} className="text-xs font-light">
              {key}
            </span>
            <span key={2} className="font-semibold text-sm">
              ₺{obj[key]}
            </span>
          </div>
        )
      })
    } else {
      return <span className="font-semibold">₺{obj}</span>
    }
  }
  return (
    <div className="font-noto flex flex-col items-center bg-neutral-100 px-2.5 py-4 rounded-lg border-2 shadow-lg">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-2.5 shadow-gray-400 shadow-lg">
        <img
          src={image}
          alt={`${name} image`}
          className="object-center object-contain"
        ></img>
      </div>
      <span className="mb-3 text-center">{name}</span>
      <p className="text-xs font-light line-clamp-3 text-center text-pretty mt-auto mb-2.5">
        {desc}
      </p>
      <div className="flex w-full justify-around mt-auto">
        {showPrice(price)}
      </div>
    </div>
  )
}
