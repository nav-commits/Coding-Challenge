import '../App.css';
import React, { useEffect, useContext } from 'react';
import {Link} from "react-router-dom";
import {PlacesContext} from './PlacesContext'
import {useHistory} from 'react-router-dom'

const Places =()=> {
const [places] =  useContext(PlacesContext)
useEffect(() => {
  console.log(places) 
   },[places]);
const history = useHistory()
  return (
 <div>
    <h1 className="Places-header">Places Page</h1>
  
   <table> 
  <tr>
    <th>Busines Id</th>
    <th>Business Name</th>
    <th>Website</th>
    <th>Address</th>
  </tr> 

  {places && places.map(newPlaces=>{
   return <tr key={newPlaces}>
           <th>{newPlaces.id}</th>
           <td className="Name-Click"  onClick={()=>{
            history.push(`/Details/${newPlaces.id}`,
            {website: newPlaces.website_url,
            logo: newPlaces.logo_url,
            address: newPlaces.address,
            name: newPlaces.name,
            hours: newPlaces.hours
         });
        }} ><Link>{newPlaces.name}</Link></td>
           <td>{newPlaces.website_url}</td>
           <td>{newPlaces.address}</td>
         </tr>
   
})}
  </table>
  
 </div>
  );
}


export default Places;
