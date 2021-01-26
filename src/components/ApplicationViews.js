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
import { AnimalDetail } from "./animal/AnimalDetail.js";

// Customers
import { CustomerProvider } from "./customer/CustomerProvider.js";
import { CustomerList } from "./customer/CustomerList.js";

// Employees
import { EmployeeProvider } from "./employee/EmployeeProvider.js";
import { EmployeeList } from "./employee/EmployeeList.js";
import { EmployeeForm } from "./employee/EmployeeForm.js";
// -----

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* Uses the keyword "exact" in order to not match the rest of the routes */}
            <CustomerProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </CustomerProvider>
            
            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                        {/* d+ means any digit of any length */}
                        <Route exact path="animals/detail/:animalId(\d+)">
                            <AnimalDetail />
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
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                    <LocationProvider>
                        <Route exact path="/employees/create">
                            <EmployeeForm />
                        </Route>
                    </LocationProvider>
            </EmployeeProvider>
        </>
    );
};