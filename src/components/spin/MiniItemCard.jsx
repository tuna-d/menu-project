export default function MiniItemCard({ name, image, onClick }) {
  return (
    <div className="flex font-noto items-center mb-2 bg-[rgba(255,255,255,0.7)] rounded-xl px-1.5 py-2">
      <div className="w-8 h-8 rounded-full overflow-hidden shadow-gray-400 shadow-lg">
        <img src={image} alt={`${name} image`} className="object-center"></img>
      </div>
      <span className=" font-light ms-2 flex-1 text-center">{name}</span>
      <button className="ms-auto" onClick={onClick}>
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/material-rounded/50/delete-sign.png"
          alt="delete-sign"
        />
      </button>
    </div>
  )
}
