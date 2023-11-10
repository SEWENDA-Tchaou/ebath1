
function ContentPages() {
  return (
    <div className="text-3xl flex justify-center items-center  w-full bg-cover bg-center bg-no-repeat bg-[url('/src/assets/equipe.jpg')]">
      <div className='bg-cafe/50 text-center text-blanc py-[2%] shadow-noir-2xl w-full h-full'>
        <p className="uppercase">
          BIENVENUE EBATH ADMIN
        </p>
        <a href='/conditions' target='_blank' className='underline text-sm'>{"Conditions d'utilisation"}</a>
      </div>
    </div>
  )
}

export default ContentPages;
