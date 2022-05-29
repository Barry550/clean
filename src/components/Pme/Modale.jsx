import React from 'react'
import  './modale.css'
import image1 from './image1.jpg'
export default function Modale() {
  return (
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div style={{width: "700px"}} class="modal-content ">
      <div style={{margin: '0'}} class="modal-header bg-success">
        <h1 style={{margin: '0', padding: '0'}} class="text-white" id="exampleModalLabel">DETAILS PME</h1>
        <button style={{  borderRadius: '30%'}}  type="button" class="close " data-dismiss="modal" aria-label="Close">
          <span style={{display: 'flex', backgroundColor: "#DCE525", fontSize: '36px',borderRadius: '50%', padding: '1px 10px' }} className=""  aria-hidden="true">
            <span style={{margin: 'auto', paddingBottom: '5px'}}>
              &times;
            </span>
          </span>
        </button>
      </div>
      <div class="d-inline-flex modal-body w-100">
            <div className='modale-image'>
                <img src={image1} />
            </div>
            <div className="modale-texte">
                <h1>Sodia Plast</h1>
                <h2>Nettoyage</h2>
                <p><span>Ouvrable 7jours /7</span></p>
                <p><span>Horaire de travail:   </span>08h à 17h30</p>
                <p><span>Adresse:   </span>Belle vue, C/Dixinn</p>
                <p><span>Email:   </span>sodia@gmail.com</p>
            </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success around">S'abonner</button>
      </div>
    </div>
  </div>
</div>


  )
}



        {/* <h1 className='titre-modale'>Details pme</h1>
        <div className="sous-modale d-inline-flex">
            <div className='modale-image'>
                <img src={image1} />
            </div>
            <div className="modale-texte">
                <h1>Sodia Plast</h1>
                <h2>Nettoyage</h2>
                <p><span>Ouvrable 7jours /7</span></p>
                <p><span>Horaire de travail:   </span>08h à 17h30</p>
                <p><span>Adresse:   </span>Belle vue, C/Dixinn</p>
                <p><span>Email:   </span>sodia@gmail.com</p>
                <button>S'abonner</button>
            </div>
        </div> */}