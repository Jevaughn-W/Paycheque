// import { calculateTax } from "../helpers/paychequeCalculation";

const calculateTax = require("../helpers/paychequeCalculation.js");

function sum(a, b) {
  return a + b;
}


test('Returns nothing', ()=> {

  expect(sum(1,2)).toBe(3)
});
