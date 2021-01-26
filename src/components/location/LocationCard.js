import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

const checkEmployee = (number) => {
    switch(number){
        case 1:
            return "employee";
        default:
            return "employees";
    };
};

const checkAnimal = (number) => {
    switch(number){
        case 1:
            return "animal";
        default:
            return "animals";
    }
}

export const LocationCard = ({location}) => (
    <section className="location">
        <Link to={`/locations/detail/${location.id}`}>
            <h3 className="location__name">{location.name}</h3>
        </Link>
        <div className="location__address">{location.address}</div>
        <div className="location__employees">
            {location.employees?.length} {checkEmployee(location.employees?.length)}
        </div>
        <div className="location__animals">
            {location.animals?.length} {checkAnimal(location.animals?.length)} 
        </div>
    </section>
);