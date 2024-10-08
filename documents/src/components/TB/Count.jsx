import { RiLuggageDepositFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";


export default function Count() {
  return (
    <>
      <div className="flex justify-start gap-10 items-center">
        <div className="w-96 h-32 border-l-4 border-blue-700 rounded-md px-5 py-3 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl text-blue-700">Départments</h2>
            <RiLuggageDepositFill className="text-4xl text-blue-800" />
          </div>
          <span className="font-medium text-base text-gray-500">
            14 départements
          </span>
        </div>

        <div className="w-96 h-32 border-l-4 border-green-600 rounded-md px-5 py-3 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl text-green-600">Membres</h2>
            <PiUsersThreeFill className="text-4xl text-green-800" />
          </div>
          <span className="font-medium text-base text-gray-500">
            10 000 membres
          </span>
        </div>

        <div className="w-96 h-32 border-l-4 border-orange-700 rounded-md px-5 py-3 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl text-orange-700">Serviteurs</h2>
            <LiaUserFriendsSolid className="text-4xl text-orange-800" />
          </div>
          <span className="font-medium text-base text-gray-500">
            100 serviteurs
          </span>
        </div>
      </div>
    </>
  );
}
