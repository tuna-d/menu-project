import { Link } from "react-router"
import { useParams } from "react-router"

import logo from "/images/bunch_logo.png"

export default function Navbar({ path = "/" }) {
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full flex items-center shadow">
      {Object.keys(useParams()).length !== 0 && (
        <button className="absolute active:scale-90 ease-in-out duration-100">
          <Link to={path}>
            <div className="border-2 px-2 py-1 rounded-xl">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/100/back.png"
                alt="left"
                className="me-1"
              />
            </div>
          </Link>
        </button>
      )}

      <div className="mx-auto">
        <img src={logo} alt="logo" className="h-8 m-1.5" />
      </div>
    </nav>
  )
}
