import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider.js";
import { AnimalCard } from "./AnimalCard.js";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {getAnimals()}, []);

  return (
    <div className="animals">
      {
        animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)
      }
    </div>
  );
};