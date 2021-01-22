import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider.js";
import { AnimalCard } from "./AnimalCard.js";
import "./Animal.css";
import { LocationContext } from "../location/LocationProvider.js";
import { CustomerContext } from "../customer/CustomerProvider.js";

// The initial render is mounting to the DOM
// Subsequent "renders" are not calling AnimalList again, 
// React determines exactly what to change instead of replacing the entire component
export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  // useEffect - reach out to the world for something
  // Essentially listens for a state change
  // This "Hooks" into when something happens and triggers an intended behavior 
  // "Tell me the thing you want to do and what will trigger that behavior"
  // Two arguments: Anonymous function, Array of Dependencies (All of the things that may be changed that could trigger the behavior)
  // If nothing is in the array, it means do not do useEffect more than once; only do it when it is placed into the browser
  useEffect(() => {
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
  },[]);

  return (
    <div className="animals">
      {
        animals.map(animal => {
          const owner = customers.find(customer => customer.id === animal.customerId);
          const clinic = locations.find(location => location.id === animal.locationId);

          return <AnimalCard key={animal.id} 
            location={clinic}
            customer={owner}
            animal={animal} />})
      }
    </div>
  );
};