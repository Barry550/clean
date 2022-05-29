import React from 'react'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './gestion-des-dechets.jpg'
import ItemsRecyclage from './ItemsRecyclage'

export default function PmeRecyclage() {
  return (
    <div>
      <div className="separateur-2 d-inline-flex">
    <h1>Entreprises de recyclages</h1>
    <hr/>
    </div>
      <div className="row contenu-3 d-inline-flex">
        <ItemsRecyclage/>
        <ItemsRecyclage/>
        <ItemsRecyclage/>
        <ItemsRecyclage/>
        <ItemsRecyclage/>
        <ItemsRecyclage/>
        <ItemsRecyclage/>
        <ItemsRecyclage/>
      </div>
    </div>
  )
}

