import { TextField } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AddPast() {
  return (
    <>
      <div className="bg-white px-5 py-5 rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl text-slate-700">
            Ajouter un membre
          </h2>
          <Link to="/depart/past">
            <FaEye className="text-2xl font-bold text-slate-900" />
          </Link>
        </div>

        {/* form */}
        <form action="" method="POST" className=" py-8">
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
              label="Nom"
              variant="outlined"
              type="text"
              className=" w-full py-3"
            />

            <TextField
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              type="text"
              className=" w-full py-3"
            />

            <TextField
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              type="text"
              className=" w-full py-3"
            />
          </div>
        </form>
      </div>
    </>
  );
}
