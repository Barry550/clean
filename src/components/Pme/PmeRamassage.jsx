import React, { useEffect, useState } from 'react'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './gestion-des-dechets.jpg'
import ItemsRamassage from './ItemsRamassage'
import axios from 'axios'


export default function PmeRamassage() {

  const [ramassages, setRamassages] = useState()


  useEffect(async ()=>{
   await axios
      .get('http://localhost:1337/api/pmes?populate=*')
      .then((res)=> {
        console.log('Well done!');
        console.log('User profile', setRamassages(res.data));
      })
      .catch((error) => {
            console.log("error: ",error)
      });
    
  },[])
  return (
    <div>
    <div className="separateur-1 d-inline-flex">
        <h1>Entreprises de ramassages</h1>
        <hr className=''/>
    </div>
    <div className="row contenu-1 d-inline-flex justify-content-center align-items-center">
     {
       ramassages?.data?.map(ramassage => <ItemsRamassage ramassage={ramassage}/> )
     } 
      </div>
    </div>
  )
}
