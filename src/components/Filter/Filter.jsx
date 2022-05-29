
import React ,{useState} from 'react'

export default function Filter() {

  const [btn , setBtn] = useState('btn btn-success')
  const [toggle , setToggle] = useState("")
  return (
    <div className="input-0">
      
    <h2>Trouvez la PME la plus proche de vous</h2>
        <div className="input-1">
            <label for="pays">Votre commune</label><br />

                <select onChange={(e)=> setToggle(e.target.value)}  className="custom-select " name="pays" id="pays">
                        <option className={toggle === "ratoma" ? btn : ''} value="ratoma">Ratoma</option>
                        <option value="matoto">Matoto</option>
                        <option value="matam">Matam</option>
                        <option value="dixin">Dixin</option>
                        <option value="kaloum">Kaloum</option>
                </select>
        </div>

        <div className="input-2">
        <label for="pays">Service</label><br />
            <select  className="custom-select" name="pays" id="pays">
                    <option value="ratoma">Ramassage</option>
                    <option value="matoto">Recyclage</option>                   
            </select>
        </div>
        <button className="button-rechercher">Rechercher</button>
    </div>
  )
}

