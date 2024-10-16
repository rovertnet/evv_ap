import { useContext, useEffect } from "react"
import { MyContext } from "../../App"


export default function Login() {

  const constext = useContext(MyContext)

  useEffect(()=>{
    constext.setIsHeaderFooterShow(true);
  },[])

  return (
    <>
      <div className=""></div>
    </>
  )
}
