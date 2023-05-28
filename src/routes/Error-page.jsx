import { useLocation, useRouteError } from "react-router-dom"
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function ErrorPage() {
  const location = useLocation()
  const route = location.pathname
  const error = useRouteError()

  console.log(error)

  return (
    <>
          {(route === "/error") && <Header />}
      <div id="error-page" className="container pt-5">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      {(route === "/error") && <Footer />}
    </>
  )
}
export default ErrorPage
