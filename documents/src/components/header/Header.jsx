import { Button } from "@mui/material";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";


export default function Header() {
  return (
    <>
      <header className="header fixed top-0 right-0 bg-white py-4 z-[100] flex justify-between items-cente p-5">
        <div className="searchBox w-[300px] h-[40px]">
          <FaSearch className=" absolute top-7 left-8 z-[10] cursor-pointer" />
          <input
            type="text"
            className="w-full h-full px-9 "
            placeholder="Recherche..."
          />
        </div>
        <div className="ml-auto part2">
          <ul className="flex justify-center items-center gap-3">
            <li>
              <Button>
                <IoMdMail size={30} />
              </Button>
            </li>

            <li>
              <Button>
                <FaBell size={30} />
              </Button>
            </li>

            <li>
              <Button>
                <FaUserCircle size={30} />
              </Button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
