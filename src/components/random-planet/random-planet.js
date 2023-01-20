import React,{useEffect, useState} from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';


const RandomPlanet = () => {

  const [state, setState] = useState({data: {}})
  const {id, name, population, rotationPeriod, diameter} = state.data ;
  const planetImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;  
  const swapi = new SwapiService() //Request to backend - json



  const updatePlanet = ()=> {
    const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    swapi.getPlanet(id)
    .then(data => {
      setState({data: data})
    })
  }
  
  useEffect(() => {
    updatePlanet()
    setInterval(() => updatePlanet(), 3000)
  }, [])


  return(
    <div className="random-planet jumbotron rounded">
           <img className="planet-image"
                src={planetImg}/>
            <div>
               <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Population</span>
                   <span>{population}</span>
                </li>
               <li className="list-group-item">
                 <span className="term">Rotation Period</span>
                 <span>{rotationPeriod}</span>
               </li>
               <li className="list-group-item">
                  <span className="term">Diameter</span>
                 <span>{diameter}</span>
                </li>
             </ul>
           </div>
         </div>
  )
}

export default RandomPlanet;





// export default class RandomPlanet extends Component {
// swapi = new SwapiService()

// state = {
//   data: {}
// }

// _updatePlanet = () => {
//   const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)

//   this.swapi.getPlanet(id)
//   .then(data => {
//     this.setState({data: data})
//   })
// }

// componentDidMount = () => {
//   this._updatePlanet()
//   setInterval(() => this._updatePlanet(), 3000)
// }


//   render() {

//     const {id, name, population, rotationPeriod, diameter} = this.state.data ;
//     const planetImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
//     return (
//       <div className="random-planet jumbotron rounded">
//         <img className="planet-image"
//              src={planetImg}/>
//         <div>
//           <h4>{name}</h4>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">
//               <span className="term">Population</span>
//               <span>{population}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Rotation Period</span>
//               <span>{rotationPeriod}</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Diameter</span>
//               <span>{diameter}</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//     );
//   }
// }
