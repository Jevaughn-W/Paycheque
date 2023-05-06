import React from "react";



export default function ShowCalculation(props) {

  const payPeriods = {
    'Annually' : 1,
    'Monthly' : 12,
    'Semi-Monthly' : 24,
    'Bi-Weekly': 26
  };

  let preTaxSalary = props.state.Salary / payPeriods[props.state.PayPeriod];
  let annualNetSalary = Math.round((props.state.Salary - props.state.provincialTax - props.state.federalTax) * 100) / 100;
  let paystub = Math.round(((props.state.Salary - props.state.provincialTax - props.state.federalTax)/payPeriods[props.state.PayPeriod])* 100) / 100;
  let CPP = Math.round((preTaxSalary * props.CPP.rate)*100) / 100;

  // Function to calculate how much EI is based on salary cap
  const calaculateEI = (salary) => {
    if (salary > props.EI.max) {
      return (props.EI.max / 100) * props.EI.rate;
    }

    return (salary / 100) * props.EI.rate;
  };

  let EI = calaculateEI(preTaxSalary);

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
        <p><strong>Paystub - Includes CPP/EI:</strong> ${Math.round((paystub - CPP - EI) * 100)/ 100}</p>
        <p><strong>Paystub - Excludes CPP/EI:</strong> ${paystub}</p>
      </div>
    </section>
  )

};