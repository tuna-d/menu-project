import { Link } from "react-router"
import { useParams } from "react-router"

import logo from "/images/bunch_logo.png"

export default function Navbar({ path = "/", toggleGrid, isGrid }) {
  const isCatPage = Object.keys(useParams())[0] === "catId"
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full flex items-center shadow z-50">
      {Object.keys(useParams()).length !== 0 && (
        <Link
          to={path}
          className="absolute active:scale-90 ease-in-out duration-100"
        >
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
      )}
      <div className="mx-auto">
        <img src={logo} alt="logo" className="h-8 m-1.5" />
      </div>
      {isCatPage && (
        <div className="absolute right-4 flex gap-3" onClick={toggleGrid}>
          <svg
            style={isGrid ? { fill: "#29493D" } : { fill: "#B8421D" }}
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            className="transition duration-300 ease-in-out"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>list</title>
              <path d="M6 11.75h-2c-1.794 0.002-3.248 1.456-3.25 3.25v2c0.002 1.794 1.456 3.248 3.25 3.25h2c1.794-0.002 3.248-1.456 3.25-3.25v-2c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM6.75 17c-0.001 0.414-0.336 0.749-0.75 0.75h-2c-0.414-0.001-0.749-0.336-0.75-0.75v-2c0.001-0.414 0.336-0.749 0.75-0.75h2c0.414 0.001 0.749 0.336 0.75 0.75v0zM30 14.75h-17c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h17c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM6 0.75h-2c-1.794 0.002-3.248 1.456-3.25 3.25v2c0.002 1.794 1.456 3.248 3.25 3.25h2c1.794-0.002 3.248-1.456 3.25-3.25v-2c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM6.75 6c-0.001 0.414-0.336 0.749-0.75 0.75h-2c-0.414-0.001-0.749-0.336-0.75-0.75v-2c0.001-0.414 0.336-0.749 0.75-0.75h2c0.414 0.001 0.749 0.336 0.75 0.75v0zM13 6.25h17c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-17c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0zM6 22.75h-2c-1.794 0.002-3.248 1.456-3.25 3.25v2c0.002 1.794 1.456 3.248 3.25 3.25h2c1.794-0.002 3.248-1.456 3.25-3.25v-2c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM6.75 28c-0 0.414-0.336 0.75-0.75 0.75h-2c-0.414-0-0.75-0.336-0.75-0.75v-2c0-0.414 0.336-0.75 0.75-0.75h2c0.414 0 0.75 0.336 0.75 0.75v0zM30 25.75h-17c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h17c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path>
            </g>
          </svg>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 28 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>grid</title> <desc>Created with Sketch Beta.</desc>
              <defs> </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set"
                  sketch:type="MSLayerGroup"
                  transform="translate(-102.000000, -933.000000)"
                  style={isGrid ? { fill: "#B8421D" } : { fill: "#29493D" }}
                  className="transition duration-300 ease-in-out"
                >
                  <path
                    d="M128,941 C128,942.104 127.104,943 126,943 L122,943 C120.896,943 120,942.104 120,941 L120,937 C120,935.896 120.896,935 122,935 L126,935 C127.104,935 128,935.896 128,937 L128,941 L128,941 Z M126,933 L122,933 C119.791,933 118,934.791 118,937 L118,941 C118,943.209 119.791,945 122,945 L126,945 C128.209,945 130,943.209 130,941 L130,937 C130,934.791 128.209,933 126,933 L126,933 Z M128,957 C128,958.104 127.104,959 126,959 L122,959 C120.896,959 120,958.104 120,957 L120,953 C120,951.896 120.896,951 122,951 L126,951 C127.104,951 128,951.896 128,953 L128,957 L128,957 Z M126,949 L122,949 C119.791,949 118,950.791 118,953 L118,957 C118,959.209 119.791,961 122,961 L126,961 C128.209,961 130,959.209 130,957 L130,953 C130,950.791 128.209,949 126,949 L126,949 Z M112,941 C112,942.104 111.104,943 110,943 L106,943 C104.896,943 104,942.104 104,941 L104,937 C104,935.896 104.896,935 106,935 L110,935 C111.104,935 112,935.896 112,937 L112,941 L112,941 Z M110,933 L106,933 C103.791,933 102,934.791 102,937 L102,941 C102,943.209 103.791,945 106,945 L110,945 C112.209,945 114,943.209 114,941 L114,937 C114,934.791 112.209,933 110,933 L110,933 Z M112,957 C112,958.104 111.104,959 110,959 L106,959 C104.896,959 104,958.104 104,957 L104,953 C104,951.896 104.896,951 106,951 L110,951 C111.104,951 112,951.896 112,953 L112,957 L112,957 Z M110,949 L106,949 C103.791,949 102,950.791 102,953 L102,957 C102,959.209 103.791,961 106,961 L110,961 C112.209,961 114,959.209 114,957 L114,953 C114,950.791 112.209,949 110,949 L110,949 Z"
                    id="grid"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </nav>
  )
}
