#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  PKR: 280,
  INR: 74.57,
  GBP: 0.76,
  EUR: 0.87,
  JPY: 110.0,
  CNY: 6.0,
  KRW: 1200.0,
  THB: 35.0,
};

let user_answer = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    message: "Select a currency,you want to convert from",
    choices: ["USD", "PKR", "INR", "GBP", "EUR", "JPY", "CNY", "KRW", "THB"],
  },
  {
    type: "list",
    name: "to",
    message: "Select a currency,you want to convert from",
    choices: ["USD", "PKR", "INR", "GBP", "EUR", "JPY", "CNY", "KRW", "THB"],
  },
  {
    type: "number",
    name: "amount",
    message: "Enter your amount",
  },
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;

let result = (amount / fromamount) * toamount;

console.log(result.toFixed(2));
