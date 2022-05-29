import React, { useState } from 'react'
import image1 from './image1.jpg'

export default function ItemsRamassage({ramassage}) {



  const [url, setUrl] = useState(ramassage?.attributes?.logo?.data?.[0]?.attributes?.url)

 
  return (
<div class="produ col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
<div class="card " >

  <img class="card-img-top rounded w-100" src={`http://localhost:1337`+ url} alt="Card image cap"/>
  <div class="card-body">
  <aside className='asideModal'>
        <div className='d-flex justify-content-space-between'>
         <h2 className='h5'>{ramassage.attributes.nom}</h2>
         <h2 className="pme-commune">{ramassage.attributes.adresse}</h2>
        </div>
         <h2 className='activite'>Ramassage</h2>
    <button type="button" class="rounded modale" data-toggle="modal" data-target="#exampleModal">
    Plus de details
</button>
 </aside> 
  </div>
</div>
</div>
  )
}
