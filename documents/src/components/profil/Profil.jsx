import profilimg from "../../assets/logo/moi.png"

export default function Profil() {
  return (
    <>
      <div className="">
        <div className="h-44 w-full bg-white rounded-lg"></div>
        <div className="flex justify-start gap-3">
          <div className="bg-gray-600 rounded-full py-2 px-2 w-28 h-28 -mt-14 mx-10">
            <img
              src={profilimg}
              alt={profilimg}
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <h2 className="flex flex-col gap-0 font-bold text-xl text-slate-800 pt-2">Robert Matundu <span className="font-normal text-gray-500 text-base">Développeur Web</span></h2>
        </div>
      </div>
    </>
  );
}
