import { useEffect, useState } from 'react';

function Comment() {
        // affichage des donnes de la table contacts
   const [contactData, setContactData] = useState([])


   useEffect(()=>{
       fetch("https://ebath1.vercel.app/afficheCommentaires")
       .then(res =>res.json())
       .then(data =>setContactData(data))
       .catch(err => console.log(err));
   }, )


    return (
        <div className="space-y-2 mx-4">
            {contactData.map((data)=>(
            <div key={data.id} className=''>
            <div className="flex items-center justify-start gap-2">
                <svg width="40" height="47" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 0.200195C15.6653 0.200195 0 12.7153 0 28.1618C0 43.6083 15.6653 56.1234 35 56.1234C54.3347 56.1234 70 43.6083 70 28.1618C70 12.7153 54.3347 0.200195 35 0.200195ZM35 11.024C41.8589 11.024 47.4194 15.4663 47.4194 20.9459C47.4194 26.4255 41.8589 30.8678 35 30.8678C28.1411 30.8678 22.5806 26.4255 22.5806 20.9459C22.5806 15.4663 28.1411 11.024 35 11.024ZM35 49.8095C26.7157 49.8095 19.2923 46.8104 14.3246 42.12C16.9778 38.1287 22.1714 35.3777 28.2258 35.3777C28.5645 35.3777 28.9032 35.4228 29.2278 35.5017C31.0625 35.9753 32.9819 36.2797 35 36.2797C37.0181 36.2797 38.9516 35.9753 40.7722 35.5017C41.0968 35.4228 41.4355 35.3777 41.7742 35.3777C47.8286 35.3777 53.0222 38.1287 55.6754 42.12C50.7077 46.8104 43.2843 49.8095 35 49.8095Z" fill="#6F323A"/>
                </svg>
                <h4 className="text-noir text-md uppercase font-semibold">
                    {data.name}
                </h4>
            </div>
                    <p className="text-noir text-lg">
                        {data.comment}
                    </p>
            </div>
               ))} 
        </div>
    )
}

export default Comment;
