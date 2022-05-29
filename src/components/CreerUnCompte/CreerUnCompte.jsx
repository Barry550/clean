import React from 'react'
import { Link } from 'react-router-dom'
import Connexion from './Connexion'
import Inscription from './Inscription'

export default function CreerUnCompte() {
  return (
    <div>
      <Link to="/" className='btn btn-success mt-5' style={{marginLeft: '20px'}}> Fenteingny</Link>
          <Inscription/>
    </div>
  )
}
