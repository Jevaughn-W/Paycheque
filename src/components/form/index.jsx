import React, { useContext, useState } from "react";
import { calculateTax, calculateAnnualSalary } from "../../helpers/paychequeCalculation";
import ShowCalculation from  "./showCalculation";
import { ApplicationDataContext } from "../../App"
import '../../form.css';
import '../../calculation-panel.css';


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


    let annualSalary = calculateAnnualSalary(salaryForm); // Kept in capital so that the varible serves as a key and replaces the original
    
    let provincialTax = calculateTax(state.ontario.salary, state.ontario.rates, annualSalary);
    let federalTax = calculateTax( state.federal.salary, state.federal.rates, annualSalary);

    setSalaryForm(prev => ({...prev, provincialTax, federalTax, annualSalary}));

  };


  const hourlyInput = 
  <div className="form">
    <label className="form" htmlFor="workHours">Hours</label>
    <input
      className="form"
      type="text"
      name="workHours"
      placeholder="Hours Per Week"
      onChange={event => handleUserInput(event)}
    />
  </div>


  return (
    <div className="panel">
      <section className="userInput">

          <fieldset className="radio">
            <legend>Select Pay Type</legend>
            <div className="radio">
              <input className="radio" type="radio" id="salary" name="pay-type" value="salary" onClick={event => handleClick(event)}/>
              <label className ="radio" htmlFor="salary">Salary</label>
            </div>
            <div className="radio">
              <input className ='radio' type="radio" id="hourly" name="pay-type" value="hourly" onClick={event => handleClick(event)}/>
              <label className ="radio" htmlFor="hourly">Hourly</label>
            </div>
          </fieldset>

        <form>

          <div className="form">
            <label className="form" htmlFor="Salary">Salary</label>
            <input
              className="form"
              type="text"
              name="Salary"
              placeholder="$"
              onChange={event => handleUserInput(event)}
            />
          </div>     

          { payType === "hourly" && hourlyInput}

          <div className="form">
            <label className="form" htmlFor="Payperiod">Pay Period</label>
            <select 
              className="form"
              name="PayPeriod"
              id="payPeriod-select"
              onChange={event => handleUserInput(event)}
            >
              <option value="">Pay Period</option>
              {payPeriodList}
            </select>
          </div>

          <div className="form">
            <label className="form" htmlFor="Province">Province</label>
            <select 
              className="form"
              name="Province"
              id="province-select"
              onChange={event => handleUserInput(event)}
            >
              <option value="">Province</option>
              {provinceList}
            </select>
          </div>
        </form>
          <button onClick={event => handleCalculation(event)}>Calculate</button>
      </section>
      <ShowCalculation state={salaryForm} CPP={state.CPP} EI={state.EI}/>
    </div>
  )

};