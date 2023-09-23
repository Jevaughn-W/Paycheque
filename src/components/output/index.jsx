import React from "react";



export default function ShowCalculation(props) {

  const payPeriods = {
    'Annually' : 1,
    'Monthly' : 12,
    'Semi-Monthly' : 24,
    'Bi-Weekly': 26
  };

  let preTaxSalary = props.state.annualSalary / payPeriods[props.state.PayPeriod];
  let annualNetSalary = Math.round((props.state.annualSalary - props.state.provincialTax - props.state.federalTax) * 100) / 100;
  let paystub = Math.round(((props.state.annualSalary - props.state.provincialTax - props.state.federalTax)/payPeriods[props.state.PayPeriod])* 100) / 100;
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
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.annualSalary ? props.state.annualSalary : 0)}</td>
        </tr>
        <tr>
          <td className="label">Provincial Taxes</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.provincialTax ? props.state.provincialTax : 0)}</td>
        </tr>
        <tr>
          <td className="label">Federal Taxes</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.federalTax ? props.state.federalTax : 0)}</td>
        </tr>
        <tr>
          <td className="label">Annual Net Salary:</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(annualNetSalary ? annualNetSalary : 0)}</td>
        </tr>
        <tr>
          <td className="label">Paystub - Before CPP/EI:</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(paystub ? paystub :0 )}</td>
        </tr>
        <tr>
          <td className="label">Paystub - After CPP/EI:</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format((paystub - CPP - EI) ? (paystub - CPP - EI) : 0 )}</td>
        </tr>
      </table>
    </section>
  )

};