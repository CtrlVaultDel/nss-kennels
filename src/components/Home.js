import React from "react";
import { AnimalList } from "./animal/AnimalList.js";
import { EmployeeCard } from "./employee/EmployeeCard.js";
import { LocationCard } from "./location/LocationCard.js";
import { CustomerCard } from "./customer/CustomerCard.js";
import { PropsAndState } from "./PropsAndState.js";
import "./animal/Animal.css";
import "./employee/Employee.css";
import "./location/Location.css";
import "./customer/Customer.css";
import "./nav/NavBar.css";

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="Ryan" />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalList />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
)