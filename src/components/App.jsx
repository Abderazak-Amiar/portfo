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
import EditSkill from "../admin_routes/skills_routes/EditSkill"
//IMPORT PORTFOLIO ADMIN ROUTES 
import AddPortfolio, { sendPortfolio } from "../admin_routes/portfolio_routes/AddPortfolio"
import PortfolioList, { portfolioLoader } from "../admin_routes/portfolio_routes/PortfolioList"
//IMPORT REACT ROUTER DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  useMatch,
  BrowserRouter,
} from "react-router-dom"
import EditPortfolio from "../admin_routes/portfolio_routes/EditPortfolio"
import PrivacyPolicy from "../routes/Privacy-policy"
import ContactUs from "../routes/Contact-us"
import Login,{sendLogin} from "../routes/Login"

//END IMPORT

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="expertise" element={<Expertise />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="login" element={<Login />} action={sendLogin} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="message" element={<Message />} />
        <Route path="portfolio" element={<AdminPortfolio />}>
          <Route path="addportfolio" element={<AddPortfolio />} action={sendPortfolio} />
          <Route path="portfoliolist" element={<PortfolioList />} loader={portfolioLoader} />
          <Route path="editPortfolio/:id" element={<EditPortfolio />} />
        </Route>
        <Route path="skills" element={<Skills />}>
          <Route path="addskills" element={<AddSkills />} action={sendSkill} />
          <Route path="skillsList" element={<SkillsList />} loader={skillsLoader} />
          <Route path="editSkill/:id" element={<EditSkill />}/>
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="signout" element={<Signout />} />
      </Route>
    </Route>
  )
)

function App() {
  // const [currentRoute, setCurrentRoute] = useState(router.state.location.pathname)
  return (
    <>
    
      {/* {(!currentRoute.includes("/admin")) && <Header />} */}
      <RouterProvider router={router}></RouterProvider>
      {/* {(!currentRoute.includes("/admin")) && <Footer />} */}
    </>
  )
}

export default App
