"use strict";
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  else if (avgDolphins * 2 <= avgKoalas)
    console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
  else console.log(`No one wins`);
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
*/

/*
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
*/

/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi)
  console.log(
    `Mark's BMI(${mark.calcBMI()}) is higher than John's BMI ${john.calcBMI()}`
  );
else
  console.log(
    `John's BMI(${john.calcBMI()}) is higher than Mark's BMI ${mark.calcBMI()}`
  );
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  tip.push(calcTip(bills[i]));
  total.push(bills[i] + tip[i]);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(bills));
