import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

// useParams grabs parameters of the url to use in the component
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const { getAnimalById } = useContext(AnimalContext)

    // This is one animal so it is an object, not an array
	const [animal, setAnimal] = useState({})

    // useParams returns an object based off the key (animalId) for example
	const {animalId} = useParams();

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, [])

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* 
      The question mark is called optional chaining which acts as a failsafe 
      in case the variable after the . does not exist, the code will still run
      */}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
    </section>
  )
}