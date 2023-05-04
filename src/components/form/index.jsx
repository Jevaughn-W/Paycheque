import React, { useContext, useState } from "react";
import { calculateTax } from "../../helpers/paychequeCalculation";
import ShowCalculation from  "./showCalculation";
import { ApplicationDataContext } from "../../App"

// Ontario Tax Bracket

let ontarioSalaryTiers = [46226, 92454, 150000, 220000];
let ontarioTaxTiers = [0.0505, 0.0915, 0.1116, 0.1216, 0.1316];

// Federal Tax Bracket

let federalSalaryTiers = [53359, 106717, 165430, 235675];
let federalTaxTiers = [0.15, 0.205, 0.26, 0.29, 0.33];

const provinces = ["Ontario"];  // To update list once database is expanded

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


    let provincialTax = calculateTax(ontarioSalaryTiers, ontarioTaxTiers, salaryForm.Salary);
    let federalTax = calculateTax( federalSalaryTiers, federalTaxTiers, salaryForm.Salary);

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