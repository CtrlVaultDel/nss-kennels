import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider.js";
import { EmployeeCard } from "./EmployeeCard.js";
import "./Employee.css";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);

  //useEffect - reach out to the world for something
  // eslint-disable-next-line
  useEffect(getEmployees, []);

  const history = useHistory();

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => {history.push("/employees/create")}}>Hire Employee</button>
      <div className="employees">
        {
          //   key is used to give an independant value to each card for React to keep track
          employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)
        }
      </div>
    </>
  );
};