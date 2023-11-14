import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom"

function ProtectedRoute() {
    const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

    useEffect(() => {
        // Mettez ici la logique d'authentification, par exemple, vérifiez si l'utilisateur est connecté
        // Cela pourrait impliquer une requête à un serveur, la vérification d'un token, etc.
        const checkAuthentication = async () => {
          // Exemple: une requête à un serveur pour vérifier l'authentification
          try {
            // Remplacez cette logique par la vérification réelle de l'authentification
            const response = await fetch('https://ebath-back1.vercel.app/login');
            const data = await response.json();
            // Mettez à jour l'état d'authentification en fonction de la réponse du serveur
            setAuth(data.isAuthenticated);
            if (data.isAuthenticated) {
                navigate("/dashboard/:dashboardId");
              }
          } catch (error) {
            console.error('Erreur lors de la vérification de l\'authentification', error);
          }
        };
    
        // Appelez la fonction de vérification de l'authentification lors du montage du composant
        checkAuthentication();
      }, [navigate]);
    
    
  return (
    auth ? <Outlet />: <Navigate to='/login'/>
  )
}

export default ProtectedRoute