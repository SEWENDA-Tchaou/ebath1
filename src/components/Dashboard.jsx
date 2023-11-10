import axios from 'axios';
// import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import ContentPages from './ContentPages';
import HeaderDashboard from '../PageDashboard/HeaderDashboard'
// import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // const [auth, setAuth] = useState(false)
  // const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  // useEffect(()=>{
    
  //   if(!localStorage.getItem('token')){
  //     navigate('/login')
  //   }
  
  // }, [])

  return (
    <div className='bg-noir/10'>
    {/* {auth ? */}
      {/* <React.Fragment> */}
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
      {/* </React.Fragment> */}
      {/* }  */}
    </div>
  )
}

export default Dashboard;
