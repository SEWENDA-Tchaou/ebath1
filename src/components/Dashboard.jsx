import axios from 'axios';
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import ContentPages from './ContentPages';
import HeaderDashboard from '../PageDashboard/HeaderDashboard'
import { useParams } from 'react-router-dom';
function Dashboard() {
  const { dashboardId } = useParams();
  // const [auth, setAuth] = useState(false)
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get(`https://ebath-back1.vercel.app/dashboard/${dashboardId}`)
    .then((response)=>{
      // console.log(auth)
      // if(
        response.data.Status === "succes"
      // ){
        // setAuth(true);
        // console.log(auth)
      // }else{
        // setAuth(false);
      // }
    })
  }, [dashboardId])

  return (
    <div className='bg-noir/10'>
    {/* {auth ? */}
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
     {/* :
      <div>no data</div>
      }  */}
    </div>
  )
}

export default Dashboard;
