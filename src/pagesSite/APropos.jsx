import HeaderApropos from "../components/HeaderApropos";
import Footer from "../components/Footer";

function APropos() {
  return (
    <div className="text-noir bg-noir/5">
      <HeaderApropos />
      <div className="mx-4 sm:mx-12 mt-12">
        <div className="w-full border-b-2 border-b-cafe">
          <h2 className="w-5/6 px-4 py-2 text-lg text-blanc font-semibold uppercase bg-cafe">
            A propos de nous
          </h2>
        </div>
        <div className="text-justify  my-8 space-y-4">
          <span className="text-noir text-md sm:text-lg mb-16">
            L’Entreprise de Bâtiment et des Travaux Hydrauliques (EBATH) est créé en 2018 par  {"B'DEMAN KOSSI marc"}, Economiste et ingénieur en Génie-Civil.
            Le bureau de l’entreprise EBATH  Sise à Kara au quartier Lama, non loin du nouveau marché à 50 m de la mosquée d’EL Adj Moumouni.
            Nous sommes une entreprise spécialisée dans les travaux Publics comme : les routes, les caniveaux, les pose des paves, les dalots ; fausses ; les bâtiments et les travaux privés.
            Nous sommes egalement une entreprise spécialisée dans  la restauration, l’hébergement et service traiteur. Nous disposons de trois hôtel: Hôtel Marciale Kara Bohou, Hôtel LA FAYETTE ET l’Hôtel MA VISION B2K à Awandjelou.          
            Le siège étant basé à Kara et dans les autres villes comme Sokodé, Dapaong, Kouka et Lomé. Nous travaillons à l’intérieure et  à l’extérieur du Pays. 
          </span><br />
          <p className="max-sm:hidden">
              <span className="">Nos activités sont les suivantes :</span> <br />

              <span className="mx-14">-	Bâtiments et travaux publiques</span><br />
              <span className="mx-14">-	Construction des caniveaux, pose des pavés ;</span><br />
              <span className="mx-14">-	Hydraulique villageoise;</span><br />
              <span className="mx-14">-	Réhabilitation des bâtiments.</span> <br />
              <span className="mx-14">-	Hôtelerie, Bar et Restaurant</span> <br />
              <span className="mx-14">-	Le câblage des moteurs électriques triphasés et monophasés ;</span> <br />
              <span className="mx-14">-	Installation des panneaux solaire...</span> <br />

            </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-4xl text-noir font-bold uppercase">
                Mission
              </p>
              <p className="text-noir text-md sm:text-xl text-center mx-2 sm:mx-8">
               {" Notre mission est de réaliser des ouvrages partout au Togo et à l'extérieur.Le but est de faire les ouvrages de qualité grâce à des ingénieurs de qualité dans le suivi évaluation conception."}

              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-4xl text-noir font-bold uppercase">
                Valeurs
              </p>
              <p className="text-noir text-md sm:text-xl text-center mx-2 sm:mx-8">
              {"Innovation.Ces valeurs capitales, placées au cœur de l'activité, permettent de remplir deux objectifs : la satisfaction client et la satisfaction personnelle d'un travail réussi et esthétique."}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-4xl text-noir font-bold uppercase">
                Principes
              </p>
              <p className="text-noir text-md sm:text-xl text-center mx-2 sm:mx-8">
                {"L'entreprise EBATH travail avec les ouvriers expérimentés dans tous les domaines Mais aussi offre des stages aux jeunes pour l'acquisition des connaissances et expériences"}            
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default APropos;
