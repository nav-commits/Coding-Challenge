import { createContext, useState } from "react";
import axios from 'axios';

export const PlacesContext = createContext();

export const PlacesProvider = (props) =>{
const [places,setPlaces]= useState([])
const url = "https://6025865136244d001797c552.mockapi.io/api/v1/places";

axios.get(url)
.then(response =>{
  setPlaces(response.data)
  console.log(response);
})
.catch(err =>{
  console.log(err)
});

    return (
        <PlacesContext.Provider value={{places,setPlaces}}>
          {props.children}
        </PlacesContext.Provider>
 
     );
    
}; 