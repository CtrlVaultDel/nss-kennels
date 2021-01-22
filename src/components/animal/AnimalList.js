import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider.js";
import { AnimalCard } from "./AnimalCard.js";
import "./Animal.css";

// The initial render is mounting to the DOM
// Subsequent "renders" are not calling AnimalList again, 
// React determines exactly what to change instead of replacing the entire component
export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);

  // useEffect - reach out to the world for something
  // Essentially listens for a state change
  // This "Hooks" into when something happens and triggers an intended behavior 
  // "Tell me the thing you want to do and what will trigger that behavior"
  // Two arguments: Anonymous function, Array of Dependencies (All of the things that may be changed that could trigger the behavior)
  // If nothing is in the array, it means do not do useEffect more than once; only do it when it is placed into the browser
  useEffect(() => (getAnimals),[]);

  const history = useHistory();

  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => {history.push("/animals/create")}}>Add Animal</button>
      <div className="animals">
        {
          animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)
        }
      </div>
    </>
  );
};