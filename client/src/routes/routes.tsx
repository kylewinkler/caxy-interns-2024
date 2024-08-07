import Home from "../pages/Home/Home"
import User from "../pages/Users/User"

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/dogs",
    element: <User />,
    title: "Dogs",
  },
]
