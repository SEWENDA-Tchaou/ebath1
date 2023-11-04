import axios from 'axios'
import {useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
  const [values,  setValues] = useState({ 
    email:"",
    password:""
  })

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    axios.post('https://fine-pink-deer.cyclic.app/login', values)
    .then(res => {
      console.log(res.data.Status)
      if(res.data.Status === "succes"){
          navigate("/dashboard/*")
      }else{
          alert(res.data.Message)
      }
    })
    .catch(err=>console.log(err))
  };

  return (
    <>
      <div className="bg-noir/20 h-[100vh] p-5">
        {/* <a href="/"> <img src="/assets/img/logo_ebath.jpg" alt="" width='50'/> </a> */}
        <a href="/">
          <span className="text-sm text-noir hover:opacity-50">Retour</span>
        </a>
          <p className="text-rouge text-center">{"Cette page est reservee uniquement a l'Administrateur"}</p>
          <section className="my-[6%] mx-[30%] px-10 pt-6 pb-10  border rounded-xl">
            <h1 className="text-2xl text-center  mb-5 font-thin ">Connexion</h1>
            <form
              action=""
              className=""
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="mr-20">Email</label>
              <input type="email"
                className="border px-5"
                name="email"
                onChange={e => setValues({...values, email: e.target.value})}
              /> <br /><br />

              <label htmlFor="" className="mr-5">Mot de passe</label>
              <input
                type="password"
                className="border px-5"
                name="password"
                onChange={e => setValues({...values, password: e.target.value})}
              /> <br /> <br />

              <button
                type="submit"
                className="bg-cafe hover:bg-blanc border hover:text-cafe hover:border-cafe rounded text-blanc p-2"
              >
                Se connecter
              </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Login;
