import { BrowserRouter, Route, Routes } from "react-router-dom"
import SideBar from "./components/sidebar/SideBar"
import Dashboard from "./pages/Dashboard"
import { createContext } from "react"
import Docs from "./pages/Docs";
import Depart from "./pages/Depart";
import Membre from "./pages/Membre";
import Settings from "./pages/Settings";
import Header from "./components/header/Header";

const MyContext = createContext();

function App() {

  const values = {

  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <section className="main flex">
            <div className="sidebarWrapper w-[20%]">
              <SideBar />
            </div>

            <div className="content_Right w-[80%] ">

              <Header />
              
              <div className="space"></div>

              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/docs" exact={true} element={<Docs />} />
                <Route path="/depart" exact={true} element={<Depart />} />
                <Route path="/membre" exact={true} element={<Membre />} />
                <Route path="/settings" exact={true} element={<Settings />} />
              </Routes>
            </div>
          </section>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App
