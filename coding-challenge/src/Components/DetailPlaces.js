import '../App.css';
import React from 'react'
import {Link} from "react-router-dom"
import {useLocation} from 'react-router-dom'

const DetailPlaces = ()=>{
const location = useLocation();
console.log(location)
  return (
    <div> 
      <h3><Link style={{textDecoration:"none",color:"teal"}} to={'/'}>Go Back to Places</Link></h3>
      <img className='Image' src={location.state.logo} alt="newimage"/>
        <div>
            <h3> Business Name:{location.state.name}</h3>
            <h3> Address:{location.state.address}</h3>
             <h3> Hours:
                <p>Monday:{location.state.hours.Monday}</p>
                <p>Tuesday:{location.state.hours.Tuesday}</p>
                <p>Wednesday:{location.state.hours.Wednesday}</p>
                <p>Thursday:{location.state.hours.Thursday}</p>
                <p>Friday:{location.state.hours.Friday}</p>
                <p>Saturday:{location.state.hours.Saturday}</p>    
                <p>Sunday:{location.state.hours.Sunday}</p>    
             </h3>
                <h3> Website:{location.state.website}</h3>
        </div>
      
    </div>
  );
}

export default DetailPlaces;