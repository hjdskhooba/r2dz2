import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import './app.css';
import SwapiService from '../../services/swapi-service';
import { Provider } from '../swapi-context';
import {BrowserRouter as Router, Route} from "react-router-dom";

const swapi = new SwapiService()

const App = () => {
  return (
    <div>
      <Provider value={swapi}>
        <Router>
           <Header />
         <RandomPlanet />
          <Route exact={true} path='/' render={()=> <h1>Wlecome to StarWars</h1>}/>
          <Route path='/people/:id?' render={({ match}) => {
            const itemId = match.params.id ? match.params.id : 1;
            return (
            <PeoplePage itemId={itemId}/>
            )
          }} />
          <Route path='/planets/:id?' exact={true} render={({ match }) => {
            const itemId = match.params.id ? match.params.id : 1;
            return (
              <PlanetPage itemId={itemId}/>
              )
            }} />
          <Route path='/starships/:id?' exact={true} render={({ match }) => {
            const itemId = match.params.id ? match.params.id : 1;
            return (
              <StarshipPage itemId={itemId}/>
              )
            }} />
        </Router>
      </Provider>
    </div>
  );
};

export default App;