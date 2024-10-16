import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { GrApple } from "react-icons/gr";
import { Box, TextField } from "@mui/material";


export default function Login() {

  const constext = useContext(MyContext)

  useEffect(()=>{
    constext.setIsHeaderFooterShow(true);
  },[])

  return (
    <>
      <div className=" rounded-lg px-16 py-5 h-full w-full ">
        <div className="border-[1px] border-gray-300 rounded-lg py-5 px-5 ml-28 mr-28 bg-white">
          <h2 className="font-extrabold text-2xl text-center text-gray-700 pb-10">
            Connexion
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="border-[0.1rem] border-gray-300 rounded-lg px-5 py-2 hover:bg-slate-200 cursor-pointer">
              <FcGoogle className="font-bold text-3xl" />
            </div>
            <div className="border-[0.1rem] border-gray-300 rounded-lg px-5 py-2 hover:bg-slate-200 cursor-pointer">
              <SiFacebook className="font-bold text-3xl text-blue-700" />
            </div>
            <div className="border-[0.1rem] border-gray-300 rounded-lg px-5 py-2 hover:bg-slate-200 cursor-pointer">
              <GrApple className="font-bold text-3xl text-gray-900" />
            </div>
          </div>
          <form action="post" className="py-5 px-5">
            <div className="">
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
                className=" flex flex-col gap-3 items-center"
              >
                <TextField
                  id="outlined-basic"
                  label="Nom"
                  variant="outlined"
                  type="text"
                  className="mdp w-full py-3"
                />

                <TextField
                  id="outlined-basic"
                  label="Mot de passe"
                  variant="outlined"
                  type="password"
                  className="mdp w-36 py-3"
                />
              </Box>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
