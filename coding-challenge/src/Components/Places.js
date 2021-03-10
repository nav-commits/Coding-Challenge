import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Places() {
const [places,setPlaces] = useState([])
useEffect(() => {
    const url = "https://6025865136244d001797c552.mockapi.io/api/v1/places";
    axios.get(url)
    .then(response =>{
      setPlaces(response.data)
      console.log(response);
    })
    .catch(err =>{
      console.log(err)
    });
   },[]);

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
           <td className="Name-Click"><a href= {`/Details/${newPlaces.id}`}>{newPlaces.name}</a></td>
           <td>{newPlaces.website_url}</td>
           <td>{newPlaces.address}</td>
         </tr>
   
})}
  </table>
  
 </div>
  );
}

export default Places;
