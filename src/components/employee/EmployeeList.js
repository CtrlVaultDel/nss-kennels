import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider.js";
import { EmployeeCard } from "./EmployeeCard.js";
import "./Employee.css";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);

  //useEffect - reach out to the world for something
  useEffect(() => {getEmployees()}, []);

  return (
    <div className="employees">
      {
        //   key is used to give an independant value to each card for React to keep track
        employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)
      }
    </div>
  );
};