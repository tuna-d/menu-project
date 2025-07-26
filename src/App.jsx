import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Category from "./pages/Category"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:catId",
    element: <Category />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
