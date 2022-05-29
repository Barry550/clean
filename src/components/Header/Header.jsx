import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../context/Context'
import Menu from './Menu'

export default function Header() {

  const fristLogin = localStorage.getItem('fristLogin')

  const {user} = useContext(UserContext)

  console.log(typeof fristLogin);
  return (
    <header>
    <div className="header-1">

      {
        fristLogin ==  "true" ?  <Menu/> : ''
      }
    
      
       
    </div>
    <div  className="cta__session">
        <div className="cta__session--button">
            <h1>La Gestion de vos déchets est notre Métier</h1>
            <Link to='/dashbord' className="abonnez-vous">Abonnez-vous à une PME</Link>
         </div>
     </div>
 </header>
  )
}
