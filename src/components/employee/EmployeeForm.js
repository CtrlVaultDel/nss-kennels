import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { LocationContext } from "../location/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";


export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext);
    const { locations, getLocations } = useContext(LocationContext);

    // For edit, hold on to state of employee in this view
    // You need an initial state for it to allow you to edit it
    const [employee, setEmployee] = useState({
      name: "",
      locationId: 0
    });

    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {employeeId} = useParams();
    
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newEmployee = { ...employee };

      //employee is an object with properties.
      //set the property to the new value
      newEmployee[event.target.name] = event.target.value;
      
      //update state
      setEmployee(newEmployee);
    };

    const handleSaveEmployee = () => {
      if (parseInt(employee.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (employeeId){
          //PUT - update
          updateEmployee({
              id: employee.id,
              name: employee.name,
              locationId: parseInt(employee.locationId),
          })
          .then(() => history.push(`/employees/detail/${employee.id}`))
        }else {
          //POST - add
          addEmployee({
              name: employee.name,
              locationId: parseInt(employee.locationId),
          })
          .then(() => history.push("/employees"))
        };
      };
    };

    // Get locations. If employeeId is in the URL, getEmployeeById
    useEffect(() => {
      getLocations()
      .then(() => {
        if (employeeId){
          getEmployeeById(employeeId)
          .then(employee => {
              setEmployee(employee);
              setIsLoading(false);
          })
        } else {
          setIsLoading(false);
        };
      });
    }, // eslint-disable-next-line
    []);

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="employeeForm">
        <h2 className="employeeForm__title">{employeeId ? <>Edit Employee</> : <>New Employee</>}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeName">Employee name: </label>
            <input type="text" id="employeeName" name="name" required autoFocus className="form-control"
            placeholder="Employee name"
            onChange={handleControlledInputChange}
            defaultValue={employee.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={employee.locationId} name="locationId" id="employeeLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
            handleSaveEmployee();
          }}>
        {employeeId ? <>Save Employee</> : <>Add Employee</>}</button>
      </form>
    );
};