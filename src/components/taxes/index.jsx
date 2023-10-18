import React from "react";
import { calculateTax, payrollTaxCalculator } from "../../helpers/paychequeCalculation";
import './taxes.css';


// Options for the province drop down list
const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland', 'Northwest Territories', 'Nova Scotia', 'Nunavut', "Ontario", 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];  // To update list once database is expanded

const provinceList = provinces.map((province, index) => {
  return(
    <option value={province} key={index}>{province}</option>
  );
});


export default function Taxes(props) {
    
  // Function to create a controlled component with multiple components
  const handleUserInput = (event)=> {
    props.setState(prev => ({...prev, 'salaryForm': {[event.target.name] : event.target.value}}));
  };

  // Function to do an action once the salary and province has been provided - to be updated to provide a calculation
  const handleCalculation = (event) => {
    event.preventDefault();

    let Provincial = calculateTax(props.state.ontario.salary, props.state.ontario.rates,props.state.salaryForm.Salary);
    let Federal = calculateTax(props.state.federal.salary,props.state.federal.rates,props.state.salaryForm.Salary);
    let cpp = payrollTaxCalculator(props.state.CPP, props.state.salaryForm.Salary);
    let ei = payrollTaxCalculator(props.state.EI, props.state.salaryForm.Salary);
    

    props.setState(prev => ({...prev, 'taxes': {Provincial, Federal, cpp, ei} }));


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
      </form>

      <button onClick={event => handleCalculation(event)}>Calculate</button>
    </div>
  )

};