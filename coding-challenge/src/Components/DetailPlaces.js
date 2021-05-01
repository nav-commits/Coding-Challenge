import '../App.css';
import React from 'react'
import {Link} from "react-router-dom"
import {useLocation} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function DetailPlaces(props){
const location = useLocation();
const history = useHistory()
console.log(location)
  return (
    <div> 
      <h3><Link style={{textDecoration:"none",color:"teal"}} to={'/'}>Go Back to Places</Link></h3>
      {/* <h1> Website:{history.location.state.name}</h1> */}

    </div>
  );
}

export default DetailPlaces;