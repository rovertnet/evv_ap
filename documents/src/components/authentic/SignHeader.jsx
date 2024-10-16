import { Button } from '@mui/material';
import logo from "../../assets/logo/evvlogo.png";

export default function SignHeader() {
  return (
    <>
      <div className="flex justify-between items-center pl-16 pr-16 ml-32 mr-32">
        <div className="">
          <img src={logo} alt={logo} className="w-24" />
        </div>
        <div className="flex justify-end items-center gap-2">
          <Button className="" variant="text">
            Connexion
          </Button>
          <Button variant="outlined">S'inscrire</Button>
        </div>
      </div>
    </>
  );
}
