import React, { useContext, useEffect, useState } from "react";
// useParams grabs parameters of the url to use in the component
import { useParams } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider.js";
import "./Employee.css";

export const EmployeeDetail = () => {
    const { getEmployeeById } = useContext(EmployeeContext);

    // This is one employee so it is an object, not an array
    const [employee, setEmployee] = useState({});

    // useParams returns an object based off the key (employeeId) for example
    const {employeeId} = useParams();
    
  useEffect(() => {
    getEmployeeById(employeeId)
    .then((response) => setEmployee(response));
    }, []);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">
        <div className="employee__location__name">Location: {employee.location?.name}</div>
        <div className="employee__location__address">Address: {employee.location?.address}</div>
      </div>
    </section>
  );
};