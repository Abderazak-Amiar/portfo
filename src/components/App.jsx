import React, { useState } from "react"
//IMPORT ROUTES
import Home from "../routes/Home"
import Contact from "../routes/Contact"
import About from "../routes/About"
import Portfolio from "../routes/Portfolio"
import ErrorPage from "../routes/Error-page"
import Expertise from "../routes/Expertise"
//IMPORT COMPONENTS
import Footer from "./Footer"
import Header from "./Header"
//IMPORT ADMIN ROUTES
import Admin from "../admin_routes/Admin"
import Dashboard from "../admin_routes/Dashboard"
import Message from "../admin_routes/message_routes/Message"
import AdminPortfolio from "../admin_routes/portfolio_routes/AdminPortfolio"
import Skills from "../admin_routes/skills_routes/Skills"
import Profile from "../admin_routes/Profile"
import Settings from "../admin_routes/Settings"
import Signout from "../admin_routes/Signout"
//IMPORT SKILLS ADMIN ROUTES
import AddSkills, { addSkill, sendSkill } from "../admin_routes/skills_routes/AddSkills"
import SkillsList, { skillsLoader } from "../admin_routes/skills_routes/skillsList"
//IMPORT PORTFOLIO ADMIN ROUTES 
import AddPortfolio, { sendPortfolio } from "../admin_routes/portfolio_routes/AddPortfolio"
import PortfolioList from "../admin_routes/portfolio_routes/PortfolioList"
//IMPORT REACT ROUTER DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useMatch,
  BrowserRouter,
} from "react-router-dom"

//END IMPORT

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="expertise" element={<Expertise />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="message" element={<Message />} />
        <Route path="portfolio" element={<AdminPortfolio />}>
          <Route path="addportfolio" element={<AddPortfolio />} action={sendPortfolio} />
          <Route path="portfoliolist" element={<PortfolioList />} />
        </Route>
        <Route path="skills" element={<Skills />}>
          <Route path="addskills" element={<AddSkills />} action={sendSkill} />
          <Route path="skillsList" element={<SkillsList />} loader={skillsLoader} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="signout" element={<Signout />} />
      </Route>
    </Route>
  )
)

function App() {
  const [currentRoute, setCurrentRoute] = useState(router.state.location.pathname)
  return (
    <React.StrictMode>
      {(!currentRoute.includes("/admin")) && <Header />}
      <RouterProvider router={router}></RouterProvider>
      {(!currentRoute.includes("/admin")) && <Footer />}
    </React.StrictMode>
  )
}

export default App
