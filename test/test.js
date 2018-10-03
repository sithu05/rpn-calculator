const { expect } = require('chai');
const { RPNCalcuation } = require('../libs');

describe('Test RPN Calculation', () => {
  it ('Input => 20 5 / => 4', () => {
    expect(RPNCalcuation(['20', '5', '/'])).to.be.equal('4');
  });

  it ('Input => 4 2 + 3 - => 3', () => {
    expect(RPNCalcuation(['4', '2', '+', '3', '-'])).to.be.equal('3');
  });

  it('Input => 3 5 8 * 7 + * => 141', () => {
    expect(RPNCalcuation(['3', '5', '8', '*', '7', '+', '*'])).to.be.equal('141');
  });

  it('Input => 7 2 - 3 4 => 5 3 4', () => {
    expect(RPNCalcuation(['7', '2', '-', '3', '4'])).to.be.equal('5 3 4');
  });
});