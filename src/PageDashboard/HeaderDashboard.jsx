import axios from "axios";
import { useEffect, useState } from "react";
import Log_out from "./Log_out";

function Header() {
  const [name, setName] = useState("")

  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get("https://fine-pink-deer.cyclic.app/")
    .then(res => {
      if(res.data.Status === "succes"){
        // setAuth(true);
        setName(res.data.name);
      }
    })
  }, [name]);

  return (
    <div className='flex justify-between items-center bg-cafe/50'>
      <div className="">
          <h1 className="mx-5">EBATH-BTP</h1>
      </div>
      <Log_out/>
    </div>
  )
}

export default Header;
