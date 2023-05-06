import React from "react"
import Header from "./Header";
import Root from "../routes/Root";
import Contact from "../routes/Contact";
import About from "../routes/About";
import Portfolio from "../routes/Portfolio";
import ErrorPage from "../routes/Error-page";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Expertise from "../routes/Expertise";
import Footer from "./Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage />
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement : <ErrorPage />
  },
  {
    path : "/about",
    element : <About />,
    errorElement : <ErrorPage />
  },
  {
    path : "/contact",
    element : <Contact />,
    errorElement : <ErrorPage />
  },
  {
    path : "/expertise",
    element : <Expertise />,
    errorElement : <ErrorPage />
  },
  
]);

function App() {

  return (
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
  );
}

export default App;
