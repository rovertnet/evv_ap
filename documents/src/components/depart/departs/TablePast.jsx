import photo1 from "../../../assets/logo/RP1.jpeg";
import { IoEyeOutline } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";


export default function TablePast() {
  return (
    <>
      <div className="bg-white w-full px-2 py-3 table-responsive">
        <table className="table w-[100%] table-striped">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Nom</th>
              <th>Post-nom</th>
              <th>Pré-nom</th>
              <th>Sexe</th>
              <th>Téléphone</th>
              <th>Statut</th>
              <th>Options</th>
            </tr>
          </thead>

          {/* le corps du tableau */}
          <tbody className="">
            <tr>
              <td>01</td>
              <td>
                <div className="flex items-center gap-5">
                  <div className="imgWrapper overflow-hidden w-12 h-12 rounded-full">
                    <img src={photo1} alt={photo1} />
                  </div>
                </div>
              </td>
              <td>Matundu</td>
              <td>Kabamba</td>
              <td>Robert</td>
              <td>M</td>
              <td>+243998724266</td>
              <td>Ass.Sec</td>
              <td className="flex space-x-2 text-2xl font-bold">
                <IoEyeOutline className="text-blue-500" />
                <GrEdit className="text-green-500" />
                <RiDeleteBinLine className="text-red-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
