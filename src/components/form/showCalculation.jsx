import React from "react";



export default function ShowCalculation(props) {

  const payPeriods = {
    'Annually' : 1,
    'Monthly' : 12,
    'Semi-Monthly' : 24,
    'Bi-Weekly': 26
  };

  let annualNetSalary = Math.round((props.state.Salary - props.state.provincialTax - props.state.federalTax) * 100) / 100;
  let paystub = Math.round(((props.state.Salary - props.state.provincialTax - props.state.federalTax)/payPeriods[props.state.PayPeriod])* 100) / 100;

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
        <p><strong>Provincial Taxes:</strong> ${Math.round(props.state.provincialTax * 100) / 100}</p>
        <p><strong>Federal Taxes:</strong> ${Math.round(props.state.federalTax * 100) /100}</p>
        <p><strong>Annual Net Salary:</strong> ${annualNetSalary}</p>
        <p><strong>Paystub:</strong> ${paystub}</p>
      </div>
    </section>
  )

};