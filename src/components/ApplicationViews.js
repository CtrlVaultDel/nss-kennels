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
import { EmployeeDetail } from "./employee/EmployeeDetail.js";
// -----

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>
            
            {/* ------------LOCATIONS------------ */}
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* -------------ANIMALS------------- */}
            <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals">
                    <AnimalList />
                </Route>

                {/* Render the animal detail when http://localhost:3000/animals/detail/{animalId} */}
                {/* d+ means any digit of any length */}
                <Route exact path="/animals/detail/:animalId(\d+)"> 
                    <AnimalDetail />
                </Route>
                
                <LocationProvider>
                    <CustomerProvider>
                        {/* Render the animal form when http://localhost:3000/animals/create */}
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* ------------CUSTOMERS------------ */}
            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* ------------EMPLOYEES------------ */}
            <EmployeeProvider>
                {/* Render the employee list when http://localhost:3000/employees */}
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>

                {/* Render the employee detail when http://localhost:3000/employees/detail/{employeeId} */}
                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>

                    <LocationProvider>
                        {/* Render the employee form when http://localhost:3000/employee/create */}
                        <Route exact path="/employees/create">
                            <EmployeeForm />
                        </Route>
                    </LocationProvider>
            </EmployeeProvider>
        </>
    );
};