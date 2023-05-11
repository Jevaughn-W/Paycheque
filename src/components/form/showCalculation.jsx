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
      </div>
      <table>
        <tr>
          <td className="label">Salary</td>
          <td>${props.state.Salary}</td>
        </tr>
        <tr>
          <td className="label">Provincial Taxes</td>
          <td>${Math.round(props.state.provincialTax * 100) / 100}</td>
        </tr>
        <tr>
          <td className="label">Federal Taxes</td>
          <td>${Math.round(props.state.federalTax * 100) /100}</td>
        </tr>
        <tr>
          <td className="label">Annual Net Salary:</td>
          <td>${annualNetSalary}</td>
        </tr>
        <tr>
          <td className="label">Paystub - Includes CPP/EI:</td>
          <td>${Math.round((paystub - CPP - EI) * 100)/ 100}</td>
        </tr>
        <tr>
          <td className="label">Paystub - Excludes CPP/EI:</td>
          <td>${paystub}</td>
        </tr>
      </table>
    </section>
  )

};