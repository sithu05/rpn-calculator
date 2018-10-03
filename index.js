#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const { RPNCalcuation } = require('./libs');

const CalculationPrompt = {
  type: 'input',
  name: 'expression',
  message: 'Please enter the Expression:',

  validate: (val) => {
    if (!val) {
      return 'You need to enter the expression!'
    }

    return true;
  }
};

program
  .version('0.0.1')
  .description('RPN Calculator');

program
  .command('Calculate')
  .alias('cal')
  .description('Calculate RPN Expression')
  .action(() => {
    prompt(CalculationPrompt)
      .then(answers => {
        console.log(RPNCalcuation(answers.expression.split(' ')));
      })
  });

program.parse(process.argv);