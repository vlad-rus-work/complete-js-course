"use strict";

/*

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

*/

/*

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet("Hey");
greeterHey("Vlad");
greeterHey("Steve");

greet("Hello")("Vlad");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Yo")("Dipshit");

*/

/*

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

lufthansa.book(239, "Vlad");
lufthansa.book(654, "Johnny");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23, "Cait");

// The Call Method
book.call(eurowings, 23, "Sarah");
console.log(eurowings);

book.call(lufthansa, 239, "Marrie");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Marrie");

// The Apply Method
const flightData = [583, "George"];
book.apply(swiss, flightData);
console.log(swiss);

// The Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);

bookEW23("Vlad Rus");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

function addVATTwo(rate) {
  return function (value) {
    console.log(value + value * rate);
  };
}

const addTaxTwo = addVATTwo(0.23);
addTaxTwo(100);

*/

/*

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const that = this;
    const answer = Number(
      prompt(
        `
      What is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++
      `,
        "Write option number"
      )
    );
    // console.log(answer);
    // console.log(that);
    if (answer < 4 && answer >= 0) {
      that.answers[answer]++;
      // console.log(that.answers);
    } else return;
    this.displayResults("string");
  },
  displayResults(type = "array") {
    const that = this;
    if (type === "array") {
      console.log(that.answers);
    } else if (type === "string") {
      console.log(
        `Poll results are ${that.answers[0]}, ${that.answers[1]}, ${that.answers[2]}, ${that.answers[3]}`
      );
    }
  },
};

const answerPollEl = document.querySelector(".poll");
answerPollEl.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");

*/

/*

const runOnce = function () {
  console.log("This will run never again");
};
runOnce();

(function () {
  console.log("This will never run again");
})();

(() => console.log("This will also never run again"))();

*/

/*

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

*/

/*

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 gorups,each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We'll start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
