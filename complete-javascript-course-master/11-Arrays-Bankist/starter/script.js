"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => deposit * (1.2 / 100))
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

for (const movement of movements) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('-----FOREACH-----');
movements.forEach(function (mov, i, arr) {
  mov > 0
    ? console.log(`Movement ${i + 1}: You deposited ${mov}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
});

*/

/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'YEN']);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

*/

/*

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaShallow = dogsJulia.slice();
  dogsJuliaShallow.splice(0, 1);
  dogsJuliaShallow.splice(-2);
  const dogsJK = dogsJuliaShallow.concat(dogsKate);
  console.log(dogsJK);
  dogsJK.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);
//
console.log('-----------------------');
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);

*/

/*

const eurToUSD = 1.1;
const movementsUSD = movements.map((mov) => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementDescriptions);

*/

/*

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

*/

/*

// accumulator => SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

// Maximum value
const maximum = movements.reduce(function (acc, cur) {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(maximum);

*/

/*

const arrayOne = [5, 2, 4, 1, 15, 8, 3];
const arrayTwo = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAge = ages
    .map((cur) => (cur <= 2 ? cur * 2 : 16 + cur * 4))
    .filter((cur) => cur >= 18);
  const avgAge = humanAge.reduce((acc, cur) => acc + cur, 0) / humanAge.length;
  console.log(humanAge);
  console.log(avgAge);
};

calcAverageHumanAge(arrayOne);
calcAverageHumanAge(arrayTwo);

const arrayOne = [5, 2, 4, 1, 15, 8, 3];
const arrayTwo = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) =>
  ages
    .map((cur) => (cur <= 2 ? cur * 2 : 16 + cur * 4))
    .filter((cur) => cur >= 18)
    .reduce((acc, cur, i, arr) => {
      console.log(
        `Current Array: ${arr}, Accumulator: ${acc}, Current Element: ${cur}, Index: ${i}, Array length: ${
          arr.length
        }, acc + cur / arr.length: ${acc + cur / arr.length}`
      );
      return acc + cur / arr.length;
    }, 0);

console.log(calcAverageHumanAge(arrayOne), calcAverageHumanAge(arrayTwo));

*/

/*

// PIPELINE
const eurToUSD = 1.1;
const totalDepositsInUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsInUSD);

*/

const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

const accountFor = function (accs) {
  for (const acc of accs) {
    if (acc.owner === "Jessica Davis") {
      return acc;
    }
  }
};

console.log(accountFor(accounts));
