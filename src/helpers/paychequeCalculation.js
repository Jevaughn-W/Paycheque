const e = require("express");
const { on } = require("pg/lib/query");

let userData =  {
  Salary : 60000,
  Province: "Ontario"
};

// Ontario Tax Bracket

let ontarioSalaryTiers = [46226, 92454, 150000, 220000]
let ontarioTaxTiers = [0.0505, 0.0915, 0.1116, 0.1216, 0.1316]


// Return a subset of the tax brackets as of the first value of the salary passed in

const returnTaxBracketArray = ((arr, userSalary) => {
  
  let taxCap = arr.find(salary => salary > userSalary); // Returns undefined if user salary is greater than all elements
  if (taxCap) {
    return arr.filter(salary => salary <= taxCap);
  } else {
    return arr;
  }
});

// Return a subject of the tax rates based on the length of the tax bracket
const returnTaxRatesArray = ((arr, resultLength, salary) => { 
  let result = arr.slice(0, resultLength);
  return result;
})


console.log( returnTaxBracketArray(ontarioSalaryTiers, 250000));
console.log( returnTaxRatesArray(ontarioTaxTiers, 4));