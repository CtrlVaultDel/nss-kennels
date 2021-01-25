import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider.js";
import { CustomerCard } from "./CustomerCard.js";
import "./Customer.css";

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext);

  //useEffect - reach out to the world for something
  useEffect(getCustomers, []);

  return (
    <div className="customers">
      {
        //   key is used to give an independant value to each card for React to keep track
        customers.map(customer => <CustomerCard key={customer.id} customer={customer} />)
      }
    </div>
  );
};