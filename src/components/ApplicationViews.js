// Nothing from this component ends up in the DOM.
// It is used to control how the rest of the system behaves
// Imagine it as an old phone router station

import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./location/LocationCard";
import { AnimalProvider } from "./animal/AnimalProvider.js";
import { AnimalList } from "./animal/AnimalList.js";
import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* Uses the keyword "exact" in order to not match the rest of the routes */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomerCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    );
};