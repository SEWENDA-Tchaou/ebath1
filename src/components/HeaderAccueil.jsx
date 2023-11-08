import Navbar from "./Navbar";

function HeaderAccueil() {
  return (
    <header className="relative">
        <div
            className="absolute z-20 top-0 left-0 w-full bg-cover bg-center bg-no-repeat h-[80vh] bg-[url('/src/assets/fond_noir.png')]"
        >
            <Navbar />
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-5xl lg:text-3xl lg:w-1/2 text-center sm:text-left text-blanc uppercase font-bold mx-20">
                Nous construisons les infrastructures pour demain
                </h1>
            </div>
        </div>
        <div
            className="block z-10 top-0 left-0 w-full bg-cover bg-center bg-no-repeat h-[80vh] bg-[url('/src/assets/banner1.png')]"
        ></div>
    </header>
  )
}

export default HeaderAccueil;
