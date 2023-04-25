import React from "react";



export default function ShowCalculation(props) {

  return(
    <section className="result">
      <div className="result-header">
        <h2>Tax Summary</h2>
        <img
        className="close-button"
          src="images/close.png"
          alt="Close"
          onClick={props.cancel}
        />
      </div>
      <div className="result-body">
        <p>Provincial Taxes: {props.state.provincialTax}</p>
        <p>Federal Taxes: {props.state.federalTax}</p>
        <p>Annual Net Salary: {props.state.Salary - props.state.provincialTax - props.state.federalTax}</p>
        <p>Monthly Salary: {(props.state.Salary - props.state.provincialTax - props.state.federalTax)/12}</p>
      </div>
    </section>
  )

};