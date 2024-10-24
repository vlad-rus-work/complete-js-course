// 1

/*
let dolphins = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;

if (dolphins > koalas && dolphins >= 100) console.log("Dolphins win!");
else if (dolphins < koalas && koalas >= 100) console.log("Koalas win!");
else if (dolphins === koalas && dolphins >= 100 && koalas >= 100)
  console.log("Draw");
else console.log("No one wins");
*/

// 4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${tip + bill}`);
