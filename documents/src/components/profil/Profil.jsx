import profilimg from "../../assets/logo/moi.png"
import { MdEdit } from "react-icons/md";


export default function Profil() {
  return (
    <>
      <div className="bg-white pb-10">
        <div className="flex justify-end h-44 w-full bg-blue-200 rounded-tl-lg rounded-tr-lg space-x-2 p-2">
          <MdEdit className="text-2xl font-bold text-gray-500 cursor-pointer hover:text-slate-500" />
        </div>
        <div className="flex justify-start gap-3">
          <div className=" bg-gray-400 rounded-full py-2 px-2 w-28 h-28 -mt-14 mx-10">
            <img
              src={profilimg}
              alt={profilimg}
              className="rounded-full w-24 h-24 object-cover border-4 border-white "
            />
          </div>
          <h2 className="flex flex-col gap-0 font-bold text-xl text-slate-800 pt-2">
            Robert Matundu{" "}
            <span className="font-normal text-gray-500 text-base">
              Développeur Web
            </span>
          </h2>
          <hr />
        </div>
      </div>
    </>
  );
}
