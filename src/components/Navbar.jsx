import { Link } from "react-router"

export default function Navbar({ path = "/" }) {
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full flex items-center shadow">
      {path !== "/" && (
        <button className="absolute active:scale-90 ease-in-out duration-100">
          <Link to={path}>
            <img
              width="44"
              height="44"
              src="https://img.icons8.com/laces/64/left.png"
              alt="left"
            />
          </Link>
        </button>
      )}

      <div className="mx-auto">
        <img
          src="src/assets/images/bunch_logo.png"
          alt="logo"
          className="h-8 m-1.5"
        />
      </div>
    </nav>
  )
}
