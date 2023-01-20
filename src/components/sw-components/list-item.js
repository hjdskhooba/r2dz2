import React from "react";
import ItemList from '../item-list'
import withSwapi from '../hoc'

const planetsElementMethods = (swapi) => ({getData: swapi.getAllPlanets})
const PlanetList = withSwapi(ItemList, planetsElementMethods)

const peopleElemetMethods = (swapi) => ({getData: swapi.getAllPeople})
const PeopleList = withSwapi(ItemList, peopleElemetMethods)

const starshipElemetMethods = (swapi) => ({getData: swapi.getAllStarships})
const StarshipList = withSwapi(ItemList, starshipElemetMethods)

export {PlanetList, PeopleList,StarshipList}