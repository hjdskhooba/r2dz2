import React from "react"
import withSwapi from "../hoc"
import {ItemDetails} from '../item-details';

const planetElemetMethods = (swapi) => ({
    getData: swapi.getPlanet, 
    getImage: swapi.getPlanetImage
})
const PlanetItemDetails = withSwapi(ItemDetails, planetElemetMethods)


const personElemetMethods = (swapi) => ({
    getData: swapi.getPerson, 
    getImage: swapi.getPersonImage
})
const PersonItemDetails = withSwapi(ItemDetails, personElemetMethods)


const starshipElemetMethods = (swapi) => ({
    getData: swapi.getStarship, 
    getImage: swapi.getStarshipImage
})
const StarshipItemDetails = withSwapi(ItemDetails, starshipElemetMethods )

export { PlanetItemDetails, PersonItemDetails, StarshipItemDetails}
