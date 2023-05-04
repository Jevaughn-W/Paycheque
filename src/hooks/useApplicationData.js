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
      'provincial' : {
        'salary' : [46226, 92454, 150000, 220000],
        'rates' : [0.0505, 0.0915, 0.1116, 0.1216, 0.1316]
      },
      'federal' : {
        'salary' : [53359, 106717, 165430, 235675],
        'rates' : [0.15, 0.205, 0.26, 0.29, 0.33]
      }
    }
  );


  return {state, setState}
}