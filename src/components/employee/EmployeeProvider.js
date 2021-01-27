import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
// createContext() makes an object with properties
export const EmployeeContext = createContext();

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees);
    };

    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
            .then(res => res.json());
    };

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees);
    };

    const updateEmployee = employee => {
        return fetch(`http://localhost:8088/employees/${employee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(employee)
        })
          .then(getEmployees);
      };

    const fireEmployee = employeeId => {
        return fetch(`http://localhost:8088/employees/${employeeId}`, {
            method: "DELETE"
        })
        .then(getEmployees);
    };

    // Subcomponent that renders a subset of itself called a Provider
    // Provider = Interface that other components can use in order to gain access
    // to what the provider holds.
    return (
        <EmployeeContext.Provider value={{employees, getEmployees, getEmployeeById, addEmployee, updateEmployee, fireEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    );
};