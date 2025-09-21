export default function CategoryBox({ name, handleClick, isSelected = false }) {
  return (
    <div
      className={
        isSelected
          ? "border-1 border-[#B8421D] rounded-xl px-2 py-1 min-w-18 text-center bg-neutral-200 shadow-2xl active:scale-95 flex justify-center items-center"
          : "border-1 border-neutral-200 rounded-xl px-2 py-1 min-w-18 text-center bg-neutral-200 shadow-2xl active:scale-95 flex justify-center items-center"
      }
      onClick={handleClick}
      id={name}
    >
      <span className="font-montserrat text-sm select-none font-light">
        {name}
      </span>
    </div>
  )
}
