export default function SearchBar({ placeholder, onChange, value }) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="bg-[rgba(255,255,255,0.5)] px-3 py-1.5 shadow-2xl rounded-2xl w-full focus:outline-0 mb-4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
