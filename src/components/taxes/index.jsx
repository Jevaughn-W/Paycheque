import React, { useState } from "react";
import { calculateTax } from "../../helpers/paychequeCalculation";
import './taxes.css';


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


export default function Taxes(props) {
    
  const [salaryForm, setSalaryForm] = useState({"Salary": 0, "Province": null, 'PayPeriod': null});
  
  // Function to create a controlled component with multiple components
  const handleUserInput = (event)=> {
    setSalaryForm(prev => ({...prev, [event.target.name] : event.target.value}));
  };

  // Function to do an action once the salary and province has been provided - to be updated to provide a calculation
  const handleCalculation = (event) => {
    event.preventDefault();

    let Provincial = calculateTax(props.state.ontario.salary, props.state.ontario.rates,props.state.salaryForm.Salary);
    let Federal = calculateTax(props.state.federal.salary,props.state.federal.rates,props.state.salaryForm.Salary);

    props.setState(prev => ({...prev, salaryForm, 'taxes': {Provincial, Federal} }))

  };

  return (
    <div className="userInput">

      {/* Beginning of forme details */}
      <form>

        {/* Input for the user province */}
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

        {/* Input for user salary */}
        <div className="form">
          <label className="form" htmlFor="Salary">Employment Income</label>
          <input
            className="form"
            type="text"
            name="Salary"
            placeholder="$"
            onChange={event => handleUserInput(event)}
          />
        </div>     

        {/* Input for user pay period */}
        <div className="form">
          <label className="form" htmlFor="Payperiod">Pay Period</label>
          
          {/* Note that select is used to obtain the drop down menu */}
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
        </form>

        <button onClick={event => handleCalculation(event)}>Calculate</button>
    </div>
  )

};