import { Navigate, Outlet } from "react-router-dom"
function ProtectedRoute() {
   const auth = false
  return (
    auth ? <Outlet to='/dashboard/*' />: <Navigate to='/login'/>
  )
}

export default ProtectedRoute