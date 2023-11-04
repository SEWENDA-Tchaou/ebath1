import { NavLink } from 'react-router-dom';

function Sidebar() {
  const SidebarMenu = [
    {
      path: "/hotel",
      name: "Hotel, Bar et restaurant"
    },
    {
      path: "/btp",
      name: "Btp"
    },
    {
      path: "/background",
      name: "Background Banner"
    },
    {
      path: "/pageAcceuil",
      name: "Page Acceuil"
    },
    {
      path: "/allcontact",
      name: "Messages recus"
    },
    {
      path: "/commentaire",
      name: "Voir Commentaires "
    },
    {
      path: "/newsletter",
      name: "Les abonnes du site"
    },
  ];

  return (
    <div >
      <h1 className='text-xl flex justify-center items-center h-20 border-b-2 text-rouge'>Metter a jour votre Site</h1>
      {
        SidebarMenu.map((item, index) => {
          return(
            <div key={index} className='hover:bg-white hover: hover: my-0  border-b-2'>
              <NavLink to={item.path}>
                <span
                  className='text-xl flex justify-center items-center h-20 '
                  // eslint-disable-next-line react/no-unknown-property
                  activeClassName='active'
                >
                  {item.name}
                </span>
              </NavLink>
            </div>
          )
        })
      }
    </div>
  )
}

export default Sidebar;
