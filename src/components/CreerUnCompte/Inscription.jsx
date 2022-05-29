import axios from 'axios'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './inscription.css'
export default function Inscription() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    cf_password: ''
  })

  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [view, setView] = useState(false)
  const [toggle, setToggle] = useState(false)

  const handleSubmit = async(e) =>{
  e.preventDefault()

  await  data.password !== data.cf_password && setToggle(true)

  await axios
    .post('http://localhost:1337/api/auth/local/register', {
    username: data?.username,
    email: data?.email,
    password: data?.password,
  })
  .then(response => {
    console.log('User profile', setUser(response.data.user));
    console.log('User token', setToken(response.data.jwt));
    localStorage.setItem('fristLogin', true)
    window.location = '/'
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });


}


  return (
    <div className='formulaire'>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <h1 className='titre-inscription'>Créer Votre Compte</h1>

 <div className="form-group mb-3">
    <label for="last_name">nom d'utilisateur</label>
    <input required value={data.username} onChange={(e)=> setData({...data, username: e.target.value})}   className="form-control" type="text"/>
</div>      
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input required value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}   type="email" className='form-control' />
    <small id="emailHelp" className="form-text text-secondary">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre...</small>
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Mot de passe </label>
    <input required style={{position: 'relative'}} value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}  type={view ? 'password' : 'text'} className="form-control" />
    {
      view ?   <i onClick={()=> setView(false)} style={{fontSize: '30px',position: 'absolute', top: '499px', right: '500px'}} class="las la-eye"></i> : 
      <i onClick={()=> setView(true)}  style={{fontSize: '30px',position: 'absolute', top: '499px', right: '500px'}}  class="las la-eye-slash"></i>
    }
  </div>
  <div className="form-group mb-3">
    <label for="confirm">Confirmation</label>
    <input required value={data.cf_password} onChange={(e)=> setData({...data, cf_password: e.target.value})}   type={view ? 'password' : 'text'} className="form-control" id="confirm" name="confirm" /> 

    {
     toggle && <p className="text-danger">Les mots de pass ne conresponde pas</p>
    }
</div>
  <button type="submit" className="button-inscription btn btn-dark mb-4">S'inscrire</button>
  <h4 className='titre2-inscription '>Vous avez un compte</h4>
  <Link to='/connexion' type="submit" className="button2-inscription btn">Connectez-vous</Link>
</form>
    </div>
  )
}
