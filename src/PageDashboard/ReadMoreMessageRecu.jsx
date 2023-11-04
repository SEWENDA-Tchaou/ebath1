import { useState } from 'react'
import PropTypes from 'prop-types';
// import whatsapp from '/assets/whatsapp.png'

function ReadMoreMessageRecu({limit, children}) {
    const [showReadMore2, setShowReadMore2] = useState(false)
    const toggleReadMore2 = ()=>{
        setShowReadMore2(prevState => !prevState)
    }

  return (
    <div className='w-[90%] text-justify text-[10px]'>
      {showReadMore2 ? children : children.substr(0, limit)}
      <div className="flex">
        <button onClick={toggleReadMore2} className='ml-2 text-rouge text-md my-2 border p-1 rounded-xl'>{showReadMore2 ? "Voir Moins" : "Voir Plus"}</button>
        <a href="https://api.whatsapp.com/send?phone=91351834&text=Ebath:%20btp,%20hôtellerie,%20bar%20et%20restaurant" target='_blank' rel="noreferrer" className='mx-1 mt-2'>
          {/* <img src={whatsapp} width={30} alt="whatsapp" /> */}
          whatsapp
          </a>
      </div>
    </div>
  )
}

ReadMoreMessageRecu.propTypes = {
  children: PropTypes.string.isRequired,
  limit: PropTypes.number
};

export default ReadMoreMessageRecu;