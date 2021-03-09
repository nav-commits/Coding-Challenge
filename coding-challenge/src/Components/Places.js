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
   },[places]);

  return (
    <div>
    <h1 className="Places-header">Places Page</h1>
      <table>
  <tr>
    <th>Busines Id</th>
  </tr>
  <tr>
    <td>Business Name</td>
  </tr>
  <tr>
    <td>Website</td>
  </tr>
    </table>
    </div>
  );
}

export default Places;
