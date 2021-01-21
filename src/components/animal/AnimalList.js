import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider.js";
import { AnimalCard } from "./AnimalCard.js";
import "./Animal.css";

// The initial render is mounting to the DOM
// Subsequent "renders" are not calling AnimalList again, 
// React determines exactly what to change instead of replacing the entire component
export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  // useEffect - reach out to the world for something
  // Essentially listens for a state change
  // This "Hooks" into when something happens and triggers an intended behavior 
  // "Tell me the thing you want to do and what will trigger that behavior"
  // Two arguments: Anonymous function, Array of Dependencies (All of the things that may be changed that could trigger the behavior)
  // If nothing is in the array, it means do not do useEffect more than once; only do it when it is placed into the browser
  useEffect(() => {getAnimals()}, []);

  return (
    <div className="animals">
      {
        //   key is used to give an independant value to each card for React to keep track
        animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)
      }
    </div>
  );
};