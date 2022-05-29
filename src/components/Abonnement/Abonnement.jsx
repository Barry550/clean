import React from 'react' 
import './Abonnement.css'
import {Link} from 'react-router-dom'
import Menu from '../Header/Menu'
export default function Abonnement() {
  return (
    <div className='abonnement-conteneur'>
        {/* <Menu/> */}
        <hr />
       
       <h1 className='abonnement-titre'> Un abonnement à la hauteur de vos moyens</h1>
    
      
      <div className='conteneur2-abonnement  d-inline-flex'>
            
      
    <div className="blocs-service">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="abonnement-tarif display-4">Prix des services</h1>
        </div>
  
        <div className="blocs1 card-deck mb-3 text-center ">
        <p className="p1 lead">
            Nous vous proposons de vous débarrasser de vos ordures en toute sécurité en souscrivant à nos services mensuels
        </p>

            <div className="bloc-1 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Maisons</h4>
                </div>
                <div className="card-body">
                 <h1 className="prix card-title pricing-card-title">35 000 FG <small className="text-muted">/ mois</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Fréquence de service:</li>
                        <li>3 fois /semaine</li>
                        <li>Tel: 620 00 00 00</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-success">Sign up for free</button>
                </div>
            </div>
            <div className="bloc-2 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Entreprises</h4>
                </div>
                <div className="card-body">
                    <h1 className="prix card-title pricing-card-title">100 000FG <small className="text-muted"> / mois</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Fréquence de service:</li>
                        <li>Jours ouvrables</li>
                        <li>Tel: 620 00 00 00</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-success">Get started</button>
                </div>
            </div>
            <div className="bloc-3 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className=" prixmy-0 font-weight-normal">Restaurants</h4>
                </div>
                <div className="card-body">
                    <h1 className="prix card-title pricing-card-title">150 000FG <small className="text-muted">/ mois</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Fréquence de service:</li>
                        <li>Tous les jours</li>
                        <li>Tel: 620 00 00 00</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-success">Contact us</button>
                </div>
            </div>
        </div>

        <div className="blocs-2 card-deck mb-3 text-center ">
        <p className="p2 lead">
            Nous vous proposons aussi des prestations de service journalière pour des cas de cérémonies
        </p>
        {/* <div className="blocs2 card-deck mb-3 text-center"> */}
        <div className="bloc-4 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Mariage</h4>
                </div>
                <div className="card-body">
                    <h1 className="prix card-title pricing-card-title">50 000FG <small className="text-muted">/ jour</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Fréquence de service:</li>
                        <li>8h à 20h</li>
                        <li>Tel: 620 00 00 00</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-success">Contact us</button>
                </div>
         </div>
         <div className="bloc-5 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Baptême</h4>
                </div>
                <div className="card-body">
                    <h1 className="prix card-title pricing-card-title">50 000FG <small className="text-muted">/ jour</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Fréquence de service:</li>
                        <li>8h à 20h</li>
                        <li>Tel: 620 00 00 00</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-success">Contact us</button>
                </div>
         </div>

         <div className="bloc-6 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Concert</h4>
                </div>
                <div className="card-body">
                    <h1 className="prix card-title pricing-card-title">300 000FG<small className="text-muted">/ jour</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Fréquence de service:</li>
                        <li>8h à 20h</li>
                        <li>Tel: 620 00 00 00</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-success">Contact us</button>
                </div>
         </div>
        </div>
        
    </div>
    </div>

    </div>
   
  )
}
