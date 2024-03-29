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

const calculateTax = (salaryArr, taxArr, userSalary) => {

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

  let tax = taxableIncome.reduce(
    (accumulator, currentValue, index) => accumulator + (currentValue * taxTiers[index]),
    0
  );

  // Check if there is an additional rate to apply
  if((salaryArr.length !== taxArr.length) && userSalary > salaryArr[salaryArr.length - 1]) {
    tax += (userSalary - salaryArr[salaryArr.length - 1]) * taxArr[taxArr.length - 1];
  }
  
  return tax;
};

// Function to calculate EI or CPP based on the input

const payrollTaxCalculator = (payrollTax, salary)=> {
  if (payrollTax.type === "cpp") {
    if (salary * payrollTax.rate > payrollTax.maxContribution) {
      return payrollTax.maxContribution;
    }
    return salary * payrollTax.rate;
  } else if (payrollTax.type === "ei") { // Check if the value is CPP or EI
      if (salary  > payrollTax.maxSalary) { 
        return Math.round(payrollTax.maxSalary * payrollTax.rate);
      }
    return Math.round(salary * payrollTax.rate);
  }
};


// export {calculateTax, payrollTaxCalculator}

module.exports = {calculateTax, payrollTaxCalculator}; // To be used when testing as jest is not configured to use jest at the moment