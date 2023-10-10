// import { calculateTax } from "../helpers/paychequeCalculation";

const {calculateTax, payrollTaxCalculator } = require("../helpers/paychequeCalculation.js");

describe('function to calculate taxes', ()=> {

  let salary = 100000;
  
  let ontario = {
    'salary' : [46226, 92454, 150000, 220000],
    'rates' : [0.0505, 0.0915, 0.1116, 0.1216, 0.1316]
  }

  let federal = {
    'salary' : [53359, 106717, 165430, 235675],
    'rates' : [0.15, 0.205, 0.26, 0.29, 0.33]
  }

  it('should return 0 when given empty arrays', ()=> {
    expect(calculateTax([],[], salary)).toBe(0)
  });
  it('should return the estimated provincial tax', ()=> {
    expect(calculateTax(ontario.salary, ontario.rates, salary)).toBe(7406.4086)
  });
  it('should return the estimated federal tax', ()=> {
    expect(Math.round(calculateTax(federal.salary, federal.rates, salary))).toBe(17565)
  });

});


describe("it should calculate payroll tax based on salary", ()=> {
  
  let salaryOne = 100000;
  let salaryTwo = 50000;
  let cpp = {'type': 'cpp', 'rate': 0.0595, 'maxContribution' : 3754};
  let ei = {'type': 'ei', 'rate' : 0.0163, 'maxSalary' : 61500};
  
  it("it should give a value of 3754 if salary is greater than 63092",() => {
    expect(payrollTaxCalculator(cpp, salaryOne)).toBe(3754);
  });
  it("it should give the correct estimate of CPP",() => {
    expect(payrollTaxCalculator(cpp, salaryTwo)).toBe(2975);
  });
  it("it should give a value of 1002.45 if there salary is greater than 61500",() => {
    expect(payrollTaxCalculator(ei, salaryOne)).toBe(1002);
  });
  it("it should give the correct estimate of EI",() => {
    expect(payrollTaxCalculator(ei, salaryTwo)).toBe(815);
  });
});