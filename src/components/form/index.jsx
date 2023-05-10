import React, { useContext, useState } from "react";
import { calculateTax } from "../../helpers/paychequeCalculation";
import ShowCalculation from  "./showCalculation";
import { ApplicationDataContext } from "../../App"
import '../../form.css';


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
  const [payType, setPayType] = useState(null);
  
  // Function to create a controlled component with multiple components
  const handleUserInput = (event)=> {
    setSalaryForm(prev => ({...prev, [event.target.name] : event.target.value}));
  };

  const handleClick = (event) => {
    setPayType(prev => event.target.value);
  }

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

        <fieldset className="radio">
          <legend>Select pay type</legend>
          <div className="radio">
            <input className="radio" type="radio" id="salary" name="pay-type" value="salary" onClick={event => handleClick(event)}/>
            <label className ="radio" htmlFor="salary">Salary</label>
          </div>
          <div className="radio">
            <input className ='radio' type="radio" id="hourly" name="pay-type" value="hourly" onClick={event => handleClick(event)}/>
            <label className ="radio" htmlFor="hourly">Hourly</label>
          </div>
        </fieldset>

      {mode === "INPUT" && <form>
        
        <div className="Form">
          <label htmlFor="Salary">Salary</label>
          <input
            type="text"
            name="Salary"
            placeholder="Salary"
            onChange={event => handleUserInput(event)}
          />
        </div>     

        { payType === "hourly" && 
        <input
          type="text"
          name="workHours"
          placeholder="workHours"
          onChange={event => handleUserInput(event)}
        />}

        <div>
          <label htmlFor="Payperiod">Pay Period</label>
          <select 
            name="PayPeriod"
            id="payPeriod-select"
            onChange={event => handleUserInput(event)}
          >
            <option value="">Pay Period</option>
            {payPeriodList}
          </select>
        </div>

        <div>
          <label htmlFor="Province">Province</label>
          <select 
            name="Province"
            id="province-select"
            onChange={event => handleUserInput(event)}
          >
            <option value="">Province</option>
            {provinceList}
          </select>
        </div>
        <button onClick={event => handleCalculation(event)}>Calculate</button>
      </form>}
      {mode === "SHOW" && <ShowCalculation state={salaryForm} cancel={onClose} CPP={state.CPP} EI={state.EI}/>}
    </section>
  )

};