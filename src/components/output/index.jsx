import React from "react";
import './calculation-panel.css';



export default function ShowCalculation(props) {


  return(
    <section className="result">
      <div className="result-header">
        <h3>Estimated Taxes Owed</h3>
        <span className= {props.state.taxes.Federal > 0 ? "total-summary active" : "total-summary"}>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format((props.state.taxes.Federal + props.state.taxes.Provincial))}</span>
      </div>

      <table>
        <tbody>
          <tr>
            <td className="label">Total Income</td>
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
            <td className="label">CPP/EI Premiums</td>
            <td>{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.taxes.ei + props.state.taxes.cpp)}</td>
          </tr>
          <tr>
            <td className="label bolded">Total Tax</td>
            <td className="bolded">{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.taxes.Federal + props.state.taxes.Provincial + props.state.taxes.ei + props.state.taxes.cpp)}</td>
          </tr>
          <tr>
            <td className="label bolded">After-Tax Income</td>
            <td className="bolded">{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format(props.state.salaryForm.Salary - (props.state.taxes.Federal + props.state.taxes.Provincial))}</td>
          </tr>
          <tr>
            <td className="label bolded">Average Tax Rate</td>
            <td className="bolded">{new Intl.NumberFormat("en-US", {style: 'percent'}).format((props.state.taxes.Federal + props.state.taxes.Provincial)/props.state.salaryForm.Salary)}</td>
          </tr>
          <tr>
            <td className="label bolded">Marginal Tax Rate</td>
            <td className="bolded">{new Intl.NumberFormat("en-US", {style: 'currency', currency : "USD"}).format( 0)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )

};