import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Filter from './components/Filter/Filter';
import Etapes from './components/Etapes/Etapes'
import Communes from './components/Communes/Communes';
import Header from './components/Header/Header';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Carousel } from 'bootstrap';
import DashBord from './components/DashBord/DashBord';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import Home from './components/Home';
import Pme from './components/Pme/Pme';
import Abonnement from './components/Abonnement/Abonnement';
import CreerUnCompte from './components/CreerUnCompte/CreerUnCompte';
import NotFound from './components/NotFound';
import Connexion from './components/CreerUnCompte/Connexion';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {UserContext} from './components/context/Context'

function App() {

  const fristLogin = localStorage.getItem('fristLogin')
  const [user, setUser] = useState(fristLogin)

  return (
   <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
      {/* <Header/> */}
        <Switch>
          <Route exact path='/'  component={()=> <Home/>}/>
          {/* <Route path="/dashbord" component={DashBord}/> */}
          <Route path="/pme" component={Pme}/>
          <Route path="/abonnement" component={Abonnement}/>
          <Route path="/compte" component={CreerUnCompte}/> 
          <Route path="/connexion" component={Connexion}/> 
          <Route component={NotFound}/>
         </Switch>
      </BrowserRouter>
   </UserContext.Provider>
  );
}

export default App;

