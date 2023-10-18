import { useState } from 'react';


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
        'rate' : 0.0163,
        'maxSalary' : 61500,
        'type': 'ei'
      },
      'CPP' : {
        'rate': 0.0595,
        'maxContribution' : 3754,
        'type' : 'cpp'
      },
      'salaryForm': {'Salary': 0, 'Province': null},
      'taxes': {'Provincial': 0, 'Federal': 0, 'cpp': 0, 'ei': 0}
    }
  );


  return {state, setState}
}