import { Navigate, Outlet } from "react-router-dom"
import Dashboard from "./Dashboard"
function ProtectedRoute() {
   const auth = false
  return (
    auth ? <Dashboard />: <Navigate to='/login'/>
  )
}

export default ProtectedRoute