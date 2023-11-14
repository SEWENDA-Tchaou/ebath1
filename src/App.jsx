import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Accueil from './pagesSite/Accueil';
import APropos from './pagesSite/APropos';
import Services from './pagesSite/Services';
import Contact from './pagesSite/Contact';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import All from './PageDashboard/All';
import Btp from './PageDashboard/Btp';
import Hotel from './PageDashboard/Hotel';
// import PageAcceuil from './PageDashboard/PageAcceuil';
import ProtectedRoute from './components/ProtectedRoute'
import Conditions from './components/Conditions';
import UpdateAll from './PageDashboard/UpdateAll';
import UpdateBtp from './PageDashboard/UpdateBtp';
import UpdateHotel from './PageDashboard/UpdateHotel';
import BackgroundBanner from './PageDashboard/BackgroundBanner';
import Commentaires from './PageDashboard/Commentaires';
import Newsletter from './PageDashboard/Newsletter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/allcontact" element={<All />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route  element={<ProtectedRoute/>} > */}
              <Route path="/dashboard/*" element={<ProtectedRoute />} />
          {/* </Route> */}
          <Route path="/btp" element={<Btp />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/background" element={<BackgroundBanner />} />
          <Route path="/conditions" element={<Conditions />} />
          {/* <Route path="/pageAcceuil" element={<PageAcceuil />} /> */}
          <Route path="/update/:id" element={<UpdateAll />} />
          <Route path="/updateBtp/:id" element={<UpdateBtp />} />
          <Route path="/updateHotel/:id" element={<UpdateHotel />} />
          <Route path="/commentaire" element={<Commentaires />} />
          <Route path="/newsletter" element={<Newsletter />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
