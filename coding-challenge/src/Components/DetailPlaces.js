import '../App.css';
import React from 'react'
import {useHistory} from 'react-router-dom';

function DetailPlaces() {
const history = useHistory();
const Handleclick = () => {
        history.push('/');
       }
  return (
    <div>
      <h1 onClick={Handleclick}>Go Back to Places</h1>
     
    </div>
  );
}

export default DetailPlaces;