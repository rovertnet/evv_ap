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
      </div>
    </>
  );
}
