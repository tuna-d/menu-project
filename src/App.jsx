import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Find from "./pages/Find"
import SpinWheel from "./pages/SpinWheel"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:catId",
    element: <Category />,
  },
  {
    path: "/findfor",
    element: <Find />,
  },
  {
    path: "/spinthewheel",
    element: <SpinWheel />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
