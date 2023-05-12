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


const calculateAnnualSalary = (salaryForm) => {
  if(salaryForm.workHours) {
    return salaryForm.salary * salaryForm.workHours * 52;  // Calculate hourly person rate by the hours per week and assuming 52 weeks per year
  } else {
    return salaryForm.salary;
  }
};


export { calculateTax, calculateAnnualSalary }