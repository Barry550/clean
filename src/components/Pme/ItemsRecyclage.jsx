import React from 'react'
import image2 from './image2.jpg'

export default function ItemsRecyclage() {
  return (
    <div class="produ col-12 col-sm-6 col-md-4 col-lg-3 mb-5">

    <div class="card " >
      <img class="card-img-top rounded w-100"  src={image2} alt="Card image cap"/>
      <div class="card-body">
      <aside>
            <div className='d-flex justify-content-space-between'>
             <h2 className='h5'>SODIA PLAST</h2>
             <h2 className="pme-commune">Dixinn</h2>
            </div>
    
             <h2 className='activite'>Recyclage</h2>
             <button type="button" class="rounded modale" data-toggle="modal" data-target="#exampleModal">
    Plus de details
</button>
     </aside> 
      </div>
    </div>
    </div>
  )
}
