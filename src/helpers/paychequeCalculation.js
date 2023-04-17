let userData =  {
  Salary : 60000,
  Province: "Ontario"
};

// Ontario Tax Bracket

let ontarioSalaryTiers = [46226, 92454, 150000, 220000]
let ontarioTaxTiers = [0.0505, 0.0915, 0.1116, 0.1216, 0.1316]

let bracketCheck = (userSalary, salaryBracket) => { // Use recursion to create an object with the salary and the rate from the above array
  if (userSalary >= salaryBracket) {
    return salaryBracket;
  }
};

console.log( bracketCheck(60000, 46226));

const result = ontarioSalaryTiers.map(salaryBracket => bracketCheck(60000, salaryBracket));

console.log(result)