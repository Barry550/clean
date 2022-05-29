import React, { useState } from 'react'
import Modale from './Modale'


import "./pme.css"

import PmeRamassage from './PmeRamassage'
import PmeRecyclage from './PmeRecyclage'
// import  { DemoCarousel } from './DemoCarousel'


export default function Pme() {

  const [search, setSearch] = useState('Toute les PME')
  return (
    <div className="conteneur">
      <div className='pme-header'>
            <h1>Des pme a votre disposition pour vos services en <span>nettoyage</span> et <span>recyclage</span></h1>
            <p>Choisissez La Pme Qui Vous COnvient Et Abonnez Vous</p>
      </div>
      <div className='barre'>
      <form className="formulaire-search  d-inline-flex ">
        <select value={search} onChange={(e)=> setSearch(e.target.value)} className='combo-select' name="" id="">
          <option value='Toute les PME'>Toute les PME</option>
          <option value='Ramassages'>Ramassages</option>
          <option value='Recyclages'>Recyclages</option>
        </select>
      {/* <input className="input-search form-control " type="search" placeholder="" aria-label="Search"></input> */}
      <input className='input-tri form-control' type='search'/>
      <button class="button-search btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
       
       {
         search === "Toute les PME" ?  <>
         <PmeRamassage/>
         <PmeRecyclage/>
         </> : search === "Ramassages" ? 
         <PmeRamassage/> :
          search === "Recyclages" ? <PmeRecyclage/> : ''
       }
       

        <Modale/>
       
    </div>
  )
}
