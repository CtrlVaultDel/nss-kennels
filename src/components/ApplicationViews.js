// Nothing from this component ends up in the DOM.
// It is used to control how the rest of the system behaves
// Imagine it as an old phone router station

// IMPORTS
import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";

// Locations
import { LocationProvider } from "./location/LocationProvider.js";
import { LocationList } from "./location/LocationList.js";

// Animals
import { AnimalProvider } from "./animal/AnimalProvider.js";
import { AnimalList } from "./animal/AnimalList.js";
import { AnimalForm } from "./animal/AnimalForm.js";

// Customers
import { CustomerProvider } from "./customer/CustomerProvider.js";
import { CustomerList } from "./customer/CustomerList.js";

// Employees
import { EmployeeProvider } from "./employee/EmployeeProvider.js";
import { EmployeeList } from "./employee/EmployeeList.js";
// -----

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* Uses the keyword "exact" in order to not match the rest of the routes */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    );
};