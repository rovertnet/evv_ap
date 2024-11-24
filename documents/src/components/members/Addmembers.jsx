import { TextField } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";

export default function Addmembers() {
  return (
    <>
      <div className="bg-white px-5 py-5 my-5 rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl text-slate-700">
            Ajouter un membre
          </h2>
          <Link to="/membre">
            <FaEye className="text-2xl font-bold text-slate-900" />
          </Link>
        </div>

        <h2 className="font-extrabold text-2xl text-slate-800 text-center">Enregistrement</h2>

        {/* form */}
        <form action="" method="POST" className=" pt-20 pb-5">
          <div className=" border-[1px]">
            <div className="grid grid-cols-2 gap-5">
              <TextField
                id="outlined-basic"
                label="Nom"
                variant="outlined"
                type="text"
                className=" w-full py-3"
              />

              <TextField
                id="outlined-basic"
                label="Post-Nom"
                variant="outlined"
                type="text"
                className=" w-full py-3"
              />

              <TextField
                id="outlined-basic"
                label="Pré-Nom"
                variant="outlined"
                type="text"
                className=" w-full py-3"
              />

              <TextField
                id="outlined-basic"
                label="Sexe"
                variant="outlined"
                type=""
                className=" w-full py-3"
              />

              <TextField
                id="outlined-basic"
                label="Adresse E-mail"
                variant="outlined"
                type="mail"
                className=" w-full py-3"
              />

              <TextField
                id="outlined-basic"
                label="Téléphone"
                variant="outlined"
                type="text"
                className=" w-full py-3"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 py-5">
              <TextField
                id="outlined-basic"
                label="Statut"
                variant="outlined"
                type="text"
                className=" w-full py-3"
              />

              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                type="file"
                className=" w-full py-3"
              />
            </div>

            <button
              type="submit"
              className="px-10 py-3 font-bold text-xl bg-blue-700 hover:bg-blue-600 text-white rounded-md flex space-x-7 w-full justify-center items-center"
            >
              <IoPersonAddOutline />
              <span>Ajouter</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
