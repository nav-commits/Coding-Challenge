import './App.css';
import Places from './Components/Places.js';
import React from 'react'
import {BrowserRouter as  Switch, Route} from 'react-router-dom';
import DetailPlaces from './Components/DetailPlaces'
function App() {
  return (
    <div className="App">
  <Switch>
       <Route exact path="/">
          <Places/>
       </Route> 
       <Route exact path="/Details/:id">
             <DetailPlaces/>
        </Route> 
  </Switch>
    </div>
  );
}

export default App;
