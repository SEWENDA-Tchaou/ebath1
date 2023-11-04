import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ContentPages from './ContentPages';
import HeaderDashboard from '../PageDashboard/HeaderDashboard'

function Dashboard() {
  const [auth, setAuth] = useState(false)
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get("https://odd-plum-hare.cyclic.app/")
    .then(res=>{
      if(res.data.Status === "succes"){
        setAuth(true);
      }else{
        setAuth(false);
      }
    })
  }, [])

  return (
    <div className='bg-noir/10'>
    {auth ?
      <React.Fragment>
        <div>
          <HeaderDashboard/>
          <section className="flex my-4">
            <div className="w-1/3  bg-cafe/50">
              <Sidebar/>
            </div>
            <div className="w-2/3 h-[100vh]">
              <ContentPages/>
            </div>
          </section>
        </div>
      </React.Fragment>
        :
      <div></div>
      }
    </div>
  )
}

export default Dashboard;
