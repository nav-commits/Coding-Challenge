import '../App.css';
import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom';
import {PlacesContext} from './PlacesContext'

function DetailPlaces() {
const [places] =  useContext(PlacesContext)
const history = useHistory();
const Handleclick = () => {
        history.push('/');
       }
  return (
    <div>
      <h1 className="Back-Page" onClick={Handleclick}>Go Back to Places</h1>
      {places && places.map(newPlaces=>{
      return <h2> {newPlaces.name}</h2>
   
     })}
    </div>
  );
}

export default DetailPlaces;