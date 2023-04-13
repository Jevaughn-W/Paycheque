import React, { useState } from "react";



const provinces = ["Ontario"];  // To update list once database is expanded

const provinceList = provinces.map((province, index) => {
  return(
    <option value={province} key={index}>{province}</option>
  );
});


export default function Form() {
  
  const [salaryForm, setSalaryForm] = useState({"Salary": 0, "Province": null});
  
  // Function to create a controlled component with multiple components
  const handleUserInput = (event)=> {
    setSalaryForm({...salaryForm, [event.target.name] : event.target.value})
  };

  // Function to do an action once the salary and province has been provided - to be updated to provide a calculation
  const calculatePayCheque = (event) => {
    event.preventDefault();
    console.log("salaryForm", salaryForm);
  }

  return (
    <section className="userInput">
      <form>
        <input
          type="text"
          name="Salary"
          placeholder="Salary"
          onChange={event => handleUserInput(event)}
        />

        <select 
          name="Province"
          id="province-select"
          onChange={event => handleUserInput(event)}
        >
          <option value="">--Please select your province--</option>
          {provinceList}
        </select>
        <button onClick={event => calculatePayCheque(event)}>Calculate</button>
      </form>
    </section>
  )

};