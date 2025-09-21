export default function CategoryCard({ name, img }) {
  return (
    <div className="bg-neutral-100 h-38 D flex justify-center items-center flex-col content-between rounded-2xl pt-2  shadow-2xl font-montserrat">
      <div className="w-24 h-24  rounded-full bg-blue-300 overflow-hidden flex justify-center shadow-xl">
        <img
          src={img}
          alt={`${name} image`}
          className="object-cover object-center"
        />
      </div>
      <h2 className="py-2 mt-2 text-center">{name}</h2>
    </div>
  )
}
