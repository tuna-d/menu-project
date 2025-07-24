import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:catId",
    element: <h1>Category: </h1>,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
