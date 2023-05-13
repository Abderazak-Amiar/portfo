import React from "react"
import Root from "../routes/Root"
import Contact from "../routes/Contact"
import About from "../routes/About"
import Portfolio from "../routes/Portfolio"
import ErrorPage from "../routes/Error-page"
import {
  createBrowserRouter,
  RouterProvider,
  RouteMatch,
} from "react-router-dom"
import Expertise from "../routes/Expertise"
import Admin from "../routes/admin"
import Footer from "./Footer"
import Header from "./Header"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expertise",
    element: <Expertise />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
])

const currentRoute = router.state.location.pathname
console.log("==>", currentRoute)
function App() {
  return (
    <React.StrictMode>
      {!(currentRoute === "/admin") && <Header />}
      <RouterProvider router={router}></RouterProvider>
      {!(currentRoute === "/admin") && <Footer />}
    </React.StrictMode>
  )
}

export default App
