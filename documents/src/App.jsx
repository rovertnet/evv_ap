import { BrowserRouter, Route, Routes } from "react-router-dom"
import SideBar from "./components/sidebar/SideBar"
import Dashboard from "./pages/Dashboard"
import { createContext, useState } from "react"
import Docs from "./pages/Docs";
import Depart from "./pages/Depart";
import Membre from "./pages/Membre";
import Settings from "./pages/Settings";
import Header from "./components/header/Header";
import Adddocs from "./components/docs/Adddocs";
import Addmembers from "./components/members/Addmembers";
import Profils from "./pages/Profils";
import Inscris from "./pages/Inscris";

const MyContext = createContext();

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(false)

  const values = {
    isLogin,
    setIsLogin,
    isHeaderFooterShow,
    setIsHeaderFooterShow
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className="main flex">
            {isHeaderFooterShow === false && (
              <div className="sidebarWrapper w-[15%]">
                <SideBar />
              </div>
            )}

            <div
              className={`content_Right w-[${
                isHeaderFooterShow === false ? "85%" : "80%"
              }] pl-5`}
            >
              {isHeaderFooterShow === false && (
                <>
                  <Header /> 
                  <div className="space"></div>
                </>
              )}

              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/docs" exact={true} element={<Docs />} />
                <Route path="/depart" exact={true} element={<Depart />} />
                <Route path="/membre" exact={true} element={<Membre />} />
                <Route path="/settings" exact={true} element={<Settings />} />
                <Route path="/docsadd" exact={true} element={<Adddocs />} />
                <Route
                  path="/memberssadd"
                  exact={true}
                  element={<Addmembers />}
                />
                <Route path="/profil" exact={true} element={<Profils />} />
                <Route path="/login" exact={true} element={<Inscris />} />
              </Routes>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App
export { MyContext}
