import React, { useContext, useState } from "react";
import { calculateTax } from "../../helpers/paychequeCalculation";
import ShowCalculation from  "./showCalculation";
import { ApplicationDataContext } from "../../App"


// Options for the province drop down list
const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland', 'Northwest Territories', 'Nova Scotia', 'Nunavut', "Ontario", 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];  // To update list once database is expanded

const provinceList = provinces.map((province, index) => {
  return(
    <option value={province} key={index}>{province}</option>
  );
});

// Options for the pay period drop down list
const payPeriods = ['Annually', 'Monthly', 'Semi-Monthly', 'Bi-Weekly'];

const payPeriodList = payPeriods.map((payPeriod, index) => {
  return(
    <option value={payPeriod} key={index}>{payPeriod}</option>
  );
});


export default function Form() {
  
  const {state, setState} = useContext(ApplicationDataContext);

  
  const [salaryForm, setSalaryForm] = useState({"Salary": 0, "Province": null, 'PayPeriod': null});
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
    let CPP = null;
    let EI = null;

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
          name="PayPeriod"
          id="payPeriod-select"
          onChange={event => handleUserInput(event)}
        >
          <option value="">Pay Period</option>
          {payPeriodList}
        </select>
        <select 
          name="Province"
          id="province-select"
          onChange={event => handleUserInput(event)}
        >
          <option value="">Province</option>
          {provinceList}
        </select>
        <button onClick={event => handleCalculation(event)}>Calculate</button>
      </form>}
      {mode === "SHOW" && <ShowCalculation state={salaryForm} cancel={onClose} CPP={state.CPP} EI={state.EI}/>}
    </section>
  )

};