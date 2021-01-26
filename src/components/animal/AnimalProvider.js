import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
// createContext() makes an object with properties
export const AnimalContext = createContext();

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    // [Variable(Storage), Function(Changes Variable)] = useState([])
    // Set the first thing that useState returns to animals and the second thing to setAnimals
    // When we use setAnimals we are calling the function responsible for changing the value of animals
    // The initial value of animals is an empty array useState([])
    // useState must have an empty array since in AnimalList it actually uses animal.map so it has to be an array even though it's empty
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location")
        .then(res => res.json())
        .then(setAnimals);
    };

    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals);
    };

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    // Subcomponent that renders a subset of itself called a Provider
    // Provider = Interface that other components can use in order to gain access
    // to what the provider holds.
    return (
        <AnimalContext.Provider value={{animals, getAnimals, getAnimalById, addAnimal}}>
            {props.children}
        </AnimalContext.Provider>
    );
};