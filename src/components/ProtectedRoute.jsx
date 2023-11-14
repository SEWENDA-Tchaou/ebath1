import { Navigate, Outlet } from "react-router-dom"
function ProtectedRoute() {
   const auth = false
  return (
    auth ? <Outlet />: <Navigate to='/login'/>
  )
}

export default ProtectedRoute