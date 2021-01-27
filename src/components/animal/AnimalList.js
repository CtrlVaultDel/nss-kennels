import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider.js";
import { AnimalCard } from "./AnimalCard.js";
import "./Animal.css";

// The initial render is mounting to the DOM
export const AnimalList = () => {
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext);
  
  // Since you are no longer ALWAYS displaying all of the animals
  const [ filteredAnimals, setFiltered ] = useState([]);
  const history = useHistory();

  // useEffect - reach out to the world for something
  // eslint-disable-next-line
  useEffect(getAnimals, []);

   // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms));
      setFiltered(subset);
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals);
    }
  }, [searchTerms, animals]);


  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => {history.push("/animals/create")}}>Make Reservation</button>
      <div className="animals">
      {
        filteredAnimals.map(animal => <AnimalCard key={animal.id} animal={animal} />)
      }
      </div>
    </>
  );
};