import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../context/Context'
import './connexion.css'

export default function Connexion() {

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const {user, setUser} = useContext(UserContext);

  console.log("user : ", user);
  console.log("setUser : ", setUser);

  const [token, setToken] = useState()

  
const handleSubmit = async(e) =>{
  e.preventDefault()

  await axios
     .post('http://localhost:1337/api/auth/local', {
       identifier: data?.email,
       password: data?.password,
     })
     .then((response) => {
       // Handle success.
       console.log('Well done!');
       console.log('User profile', setUser(response?.data?.user?.confirmed));
       console.log('User token', setToken(response.data.jwt));

       localStorage.setItem('fristLogin',response?.data?.user?.confirmed)
       window.location = '/'
     })
     .catch((error) => {
       // Handle error.
     error &&  alert('Email ou mots de passe incorrect')
     });
}

 
  return (
    <>
      <Link to="/" className='btn btn-success mt-5' style={{marginLeft: '20px'}}> Fenteingny</Link>

  <div className='Formulaire'>
        <form onSubmit={(e)=> handleSubmit(e)}>
        <h1 className='titre-inscription'>Déjà inscrit</h1>
        <div class="form-group mb-3">
            <label for="exampleInputEmail1">Email address</label>
            <input required value={data.email} onChange={(e)=> {setData({...data, email: e.target.value})}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-secondary">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre...</small>
     </div>
     <div class="form-group mb-3">
            <label for="exampleInputPassword1">Mot de passe </label>
            <input required value={data.password} onChange={(e)=> {setData({...data, password: e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
     </div>
      <button type="submit" className="button-inscription btn btn-dark mb-4">Connexion</button>
      <h4 className='titre2-inscription '>Vous n'avez pas de compte</h4>
      <Link to="/compte" type="submit" className="button2-inscription btn">Inscrivez-vous</Link>
        </form>
  </div>
    </>
  
  )
}
