import React, { useState } from 'react';

// let APIData = {
//   'provincialSalaryBrackets' : [46226, 92454, 150000, 220000],
//   'provincialTaxBrackets' : [0.0505, 0.0915, 0.1116, 0.1216, 0.1316],
//   'federalSalaryBrackets' : [53359, 106717, 165430, 235675],
//   'federalTaxBrackets' : [0.15, 0.205, 0.26, 0.29, 0.33]
// }

export default function useApplicationData() {
  const [state, setState] = useState(
    {
      'ontario' : {
        'salary' : [46226, 92454, 150000, 220000],
        'rates' : [0.0505, 0.0915, 0.1116, 0.1216, 0.1316]
      },
      'federal' : {
        'salary' : [53359, 106717, 165430, 235675],
        'rates' : [0.15, 0.205, 0.26, 0.29, 0.33]
      },
      'EI' : {
        'rate' : 1.63,
        'maxSalary' : 61500
      },
      'CPP' : {
        'rate': 0.0595,
        'maxContribution' : 3754
      },
      'salaryForm': {'Salary': 0, 'Province': null, 'PayPeriod': null}
    }
  );


  return {state, setState}
}