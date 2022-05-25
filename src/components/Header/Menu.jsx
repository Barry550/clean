import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
     <nav>
         <div className="menu d-flex justify-content-around pt-3">
         <div className="nom "><i>FENTEINGNY</i></div>
             <ul style={{listStyle: 'none'}} className='d-flex justify-content-end h4 '>
                 <li>
                     <Link to=""><span className="fas fa-home"></span>Services</Link>
                 </li>
                 <li>
                     <Link to="/pme">PME</Link>
                 </li>

                 <li>
                     <Link to="/abonnement">Abonnement</Link>
                 </li>

                 <li>
                     <Link to="/compte">creer un compte</Link>
                 </li>
             </ul>

         </div>
   
     </nav>
  )
}
