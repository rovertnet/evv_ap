import { Link } from "react-router-dom";
import logo from "../../assets/logo/evvlogo.png"
import Button from "@mui/material/Button";
import { BiSolidDashboard } from "react-icons/bi";
import { HiClipboardDocument } from "react-icons/hi2";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";



export default function SideBar() {

  const [isActive, setIsActive] = useState(0)
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false)

  const isOpenSubmenu = (index) =>{
    setIsActive(index)
    setIsToggleSubmenu(!isToggleSubmenu)
  }

  return (
    <>
      <div className="sidebar fixed top-0 left-0 z-[100] w-[20%]">
        <Link to={"/"}>
          <div className="logo pb-5 -pt-0 px-5 flex space-x-2">
            <img src={logo} alt={logo} className="w-28" />
          </div>
        </Link>
        {/* Links items */}
        <div className="sidebarTab px-5 mt-4">
          <ul className="flex gap-3 flex-col">
            <li>
              <Link to={"/"}>
                <Button
                  className={`w-[100%] ${isActive === 0 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(0)}
                >
                  <span className="icon mr-2 w-[30px] h-[25px] flex items-center justify-center rounded-md ">
                    <BiSolidDashboard size={20} />
                  </span>
                  Tableau de bord
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/docs">
                <Button
                  className={`w-[100%] mr-6 ${isActive === 1 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(1)}
                >
                  <span className="icon mr-2 w-[30px] h-[25px] flex items-center justify-center rounded-md ">
                    <HiClipboardDocument size={20} />
                  </span>
                  Documents
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/depart">
                <Button
                  className={`w-[100%] mr-6 flex justify-center items-center  ${
                    isActive === 2 && isToggleSubmenu === true ? "active" : ""
                  }`}
                  onClick={() => isOpenSubmenu(2)}
                >
                  <span className="icon mr-2 w-[30px] h-[25px] flex items-center justify-center rounded-md ">
                    <MdOutlineHomeWork size={20} />
                  </span>
                  Département
                  <span
                    className={`arrow ml-auto w-[35px] h-[25px] flex justify-center items-center ${
                      isActive === 2 && isToggleSubmenu === true ? "rotate" : ""
                    }`}
                  >
                    <FaAngleRight size={20} />
                  </span>
                </Button>
              </Link>

              <div
                className={`submenuwrapper ${
                  isActive === 2 && isToggleSubmenu === true
                    ? "collapse"
                    : "collapsed"
                }`}
              >
                <div className="submenu">
                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Pastoral
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Programme
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Protocol
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Culte
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Social
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Communication
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Technique
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Evangelisation
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Maman
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Décoration
                  </Button>

                  <Button className="w-[100%] mr-6 flex justify-center items-center">
                    Intercetion
                  </Button>
                </div>
              </div>
            </li>
            <li>
              <Link to="/membre">
                <Button
                  className={`w-[100%] mr-6 ${isActive === 3 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(3)}
                >
                  <span className="icon mr-2 w-[30px] h-[25px] flex items-center justify-center rounded-md ">
                    <TbUsersGroup size={20} />
                  </span>
                  Membres
                </Button>
              </Link>
            </li>

            <li>
              <Link to="/settings">
                <Button
                  className={`w-[100%] mr-6 ${isActive === 4 ? "active" : ""}`}
                  onClick={() => isOpenSubmenu(4)}
                >
                  <span className="icon mr-2 w-[30px] h-[25px] flex items-center justify-center rounded-md ">
                    <AiFillSetting size={20} />
                  </span>
                  Parametre
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
