import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import TablePast from "./TablePast";
import { Link } from "react-router-dom";


export default function Postoral() {
  return (
    <>
      <div className="bg-white py-5 px-5 rounded-none">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl text-slate-700">
            Membres de Pastoral
          </h2>
          <Link to="/depart/addpast">
            <Button className="py-3 px-5 flex space-x-3 rounded-md addpast">
              <FaPlus className="text-white text-xl" />
              <sppan className="font-semibold text-lg text-white">
                Ajouter
              </sppan>
            </Button>
          </Link>
        </div>
      </div>
      <TablePast />
    </>
  );
}
