import React from 'react';


export default function ShowTaxBracket(props) {


  // Create range for federal tax table
  let federalTableSalaries = props.state.federal.rates.map((rate, index)=> {
    return(
      <tr>
        <td>{props.state.federal.salary[index]}</td>
        <td>{rate}</td>
      </tr>
    )
  });

  // Create range for federal tax table
  let provincialTableSalaries = props.state.ontario.rates.map((rate, index)=> {
    return(
      <tr>
        <td>{props.state.ontario.salary[index]}</td>
        <td>{rate}</td>
      </tr>
    )
  });


  return(
    <section className='tax-bracket'>

      <table> {/*Table for the federal taxes will always be constant */}
        <thead> {/*HTML for the table header */}
          <tr>
            <th>Federal Tax Bracket</th>
            <th>Federal Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          {/*To use a js function to populate the table based on the province selected */}
          {federalTableSalaries}
        </tbody>

      </table>

      <table>
        <thead> {/*HTML for the table header */}
          <tr>
            <th>Provincial Tax Bracket</th>
            <th>Provincial Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          {/*To use a js function to populate the table based on the province selected */}
          {provincialTableSalaries}
        </tbody>

      </table>
    </section>
  )
}