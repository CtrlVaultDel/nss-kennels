import React from "react";
import "./Customer.css";

export const CustomerCard = ({customer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__address">Address: {customer.address}</div>
        <div className="customer__pets">
            <h4 className="customer__pets__header">Pets: </h4>
            {customer.animals.map(animal => <div className="customer__pets__pet">{animal.name}</div>)}
        </div>
    </section>
);