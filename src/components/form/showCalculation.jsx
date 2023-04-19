import React from "react";



export default function ShowCalculation(props) {

  return(
    <section className="result">
      <div className="result-header">
        <span>Your Tax Summary</span>
        <span onClick={props.cancel}>x goes here</span>
      </div>
      <div className="result-body">
        <p>Provincial Taxes: {props.provincialTaxes}</p>
        <p>Federal Taxes: {props.federalTaxes}</p>
        <p>Net Salary: {props.netSalary}</p>
      </div>
    </section>
  )

};