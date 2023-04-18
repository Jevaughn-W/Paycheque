const e = require("express");
const { user } = require("pg/lib/defaults");
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

const calculateStateTax = (salaryArr, taxArr, userSalary) => {

  // create a subset of the applicable table rates and salary brackets
  let salaryBracket = returnTaxBracketArray(salaryArr, userSalary);
  let taxTiers = returnTaxRatesArray(taxArr, salaryBracket.length);

  let iteratingSalary = userSalary;

  let taxableIncome  = salaryBracket.map((salary, index) => {
    
    // Check subtract the previous rate to get the tax range; if it's on the first range, return the first value
    let previousSalary = salaryBracket[index - 1] ? salary - salaryBracket[index - 1] : salary;

    // If the value/remainder is outside of the range, return the range and find the remainder. If the critera isn't met, return the remiander
    if(previousSalary < iteratingSalary) {
      iteratingSalary -= previousSalary;
      return previousSalary;
    } else {
      return iteratingSalary;
    }
  });

  let provincialTax = taxableIncome.reduce(
    (accumulator, currentValue, index) => accumulator + (currentValue * taxTiers[index]),
    0
  );

  // Check if there is an additional rate to apply
  if((salaryArr.length !== taxArr.length) && userSalary > salaryArr[salaryArr.length - 1]) {
    provincialTax += (userSalary - salaryArr[salaryArr.length - 1]) * taxArr[taxArr.length - 1];
  }
  
  return provincialTax;
};

// console.log (calculateStateTax(ontarioSalaryTiers, ontarioTaxTiers, 250000));