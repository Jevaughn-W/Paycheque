import React, { useContext, useState } from "react";
import { calculateTax } from "../../helpers/paychequeCalculation";
import ShowCalculation from  "./showCalculation";
import { ApplicationDataContext } from "../../App"

const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland', 'Northwest Territories', 'Nova Scotia', 'Nunavut', "Ontario", 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];  // To update list once database is expanded

const provinceList = provinces.map((province, index) => {
  return(
    <option value={province} key={index}>{province}</option>
  );
});


export default function Form() {
  
  const {state, setState} = useContext(ApplicationDataContext);

  
  const [salaryForm, setSalaryForm] = useState({"Salary": 0, "Province": null});
  const [mode, setMode] = useState("INPUT");
  
  // Function to create a controlled component with multiple components
  const handleUserInput = (event)=> {
    setSalaryForm(prev => ({...prev, [event.target.name] : event.target.value}));
  };

  // Function to do an action once the salary and province has been provided - to be updated to provide a calculation
  const handleCalculation = (event) => {
    event.preventDefault();


    let provincialTax = calculateTax(state.ontario.salary, state.ontario.rates, salaryForm.Salary);
    let federalTax = calculateTax( state.federal.salary, state.federal.rates, salaryForm.Salary);

    setSalaryForm(prev => ({...prev, provincialTax, federalTax}));
    setMode("SHOW");
  };

  // Function to handle closing results component
  const onClose = ()=> {
    setMode("INPUT");
  };

  return (
    <section className="userInput">
      {mode === "INPUT" && <form>
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
        <button onClick={event => handleCalculation(event)}>Calculate</button>
      </form>}
      {mode === "SHOW" && <ShowCalculation state={salaryForm} cancel={onClose}/>}
    </section>
  )

};