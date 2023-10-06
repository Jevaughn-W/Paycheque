import React from "react";
import './calculation-panel.css';



export default function ShowCalculation(props) {


  return(
    <section className="result">
      <div className="result-header">
        <h2>Tax Summary</h2>
      </div>
      <table>
        <tr>
          <td className="label">Salary</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.salaryForm.Salary)}</td>
        </tr>
        <tr>
          <td className="label">Provincial Taxes</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.taxes.Provincial)}</td>
        </tr>
        <tr>
          <td className="label">Federal Taxes</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.taxes.Federal)}</td>
        </tr>
        <tr>
          <td className="label">Annual Net Salary:</td>
          <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format( 0)}</td>
        </tr>
      </table>
    </section>
  )

};