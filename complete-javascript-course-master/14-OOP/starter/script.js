"use strict";
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const vlad = new Person("Vlad", 2002);
console.log(vlad);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically returns {}

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

vlad.calcAge();

console.dir(Person.prototype.constructor);

const arr = [3, 2, 4];
console.log(arr.__proto__);
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerates! (Current speed ${this.speed}km/h)`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} breaks! (Current speed ${this.speed}km/h)`);
};

const BMW = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.break();

mercedes.break();
mercedes.accelerate();
mercedes.accelerate();
mercedes.break();
*/

/*

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCl("Walter White", 1965);

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;

*/

/*

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "CS");
console.log(mike);
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerates! (Current speed ${this.speed}km/h)`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} breaks! (Current speed ${this.speed}km/h)`);
};

const BMW = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.break();
tesla.chargeBattery(55);
tesla.accelerate();
*/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  greet() {
    console.log(`Hello ${this.fullName}`);
  }
}

const martha = new StudentCl("Martha Jones", 2012, "CS");
martha.greet();

*/

// Public fields, private fields, public mehtods, private methods

/*
class Account {
  // Public fields
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} accelerates! (Current speed ${this.speed}km/h)`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} breaks! (Current speed ${this.speed}km/h)`);
};

const BMW = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.break();
tesla.chargeBattery(55);
tesla.accelerate();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerates! ${this.speed}km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} breaks! ${this.speed}km/h`);
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} accelerates! ${this.speed}km/h | ${this.#charge}% battery`
    );
    return this;
  }

  break() {
    this.speed -= 10;
    this.#charge--;
    console.log(
      `${this.make} accelerates! ${this.speed}km/h | ${this.#charge}% battery`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
rivian.accelerate().accelerate().break();
