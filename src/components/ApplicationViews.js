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
import { LocationForm } from "./location/LocationForm.js";
import { LocationDetail } from "./location/LocationDetail.js";

// Animals
import { AnimalProvider } from "./animal/AnimalProvider.js";
import { AnimalList } from "./animal/AnimalList.js";
import { AnimalForm } from "./animal/AnimalForm.js";
import { AnimalDetail } from "./animal/AnimalDetail.js";
import { AnimalSearch } from "./animal/AnimalSearch.js";

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
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                {/* Render the location list when http://localhost:3000/locations/detail/{animalId} */}
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>

                {/* Render the animal form when http://localhost:3000/animals/create */}
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>

                {/* Render the animal form when http://localhost:3000/animals/edit */}
                <Route exact path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
            </LocationProvider>

            {/* -------------ANIMALS------------- */}
            <AnimalProvider>
                {/* Render the animal searchbar & list when http://localhost:3000/animals */}
                <Route exact path="/animals">
                    <AnimalSearch />
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

                        {/* Render the animal form when http://localhost:3000/animals/edit */}
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* ------------CUSTOMERS------------ */}
            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/customers */}
                <Route exact path="/customers">
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

                        {/* Render the employee form when http://localhost:3000/employee/edit */}
                        <Route path="/employees/edit/:employeeId(\d+)">
                            <EmployeeForm />
                        </Route>
                    </LocationProvider>
            </EmployeeProvider>
        </>
    );
};