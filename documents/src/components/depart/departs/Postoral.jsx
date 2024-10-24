import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";


export default function Postoral() {
  return (
    <>
      <div className="bg-white py-5 px-5 rounded-none">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl text-blue-500">
            Membres de Pastoral
          </h2>
          <Button className="py-3 px-5 bg-blue-500 hover:bg-blue-500 flex space-x-3 rounded-md">
            <FaPlus />
            <sppan className="font-semibold text-lg text-white addpast">Ajouter</sppan>
          </Button>
        </div>
      </div>
    </>
  );
}
