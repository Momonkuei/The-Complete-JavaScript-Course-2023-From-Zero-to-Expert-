'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // //為ES5的做法
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('123');
// // {flightNum: '123', numPassengers: 1, price: 199}

// createBooking('123', 2);
// //{flightNum: '123', numPassengers: 2, price: 398}

// createBooking('LH123', 2, 800);
// //{flightNum: 'LH123', numPassengers: 2, price: 800}

// //錯誤示範
// createBooking('LH123', 1000);
// // {flightNum: 'LH123', numPassengers: 1000, price: 199000}

// //正確示範
// createBooking('LH123', undefined, 1000);
// // {flightNum: 'LH123', numPassengers: 1, price: 1000}

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

//示範
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    // alert('Check in');
    console.log('Check in');
  } else {
    // alert('Wrong passport!');
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same doing ...

const FlightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  console.log(person);
  person.passport = Math.trunc(Math.random() * 10000000);
  console.log(person.passport);
};

newPassport(jonas);

const onewWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`TransFormed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
// 原始的值
// Original string: JavaScript is the best!
// 透過轉化完成的字串
// Transformed string: JAVASCRIPT is the best!
// 透過 fn.name 知道引用的 function 是什麼
// TransFormed by: upperFirstWord

transformer('JavaScript is the best!', onewWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// TransFormed by: upperFirstWord

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

// document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
//3 👋

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
console.log(greeterHey);
/*
  ƒ (name) {
    console.log(`${greeting} ${name}`);
  }
*/

greeterHey('Jonas');
//Hey Jonas
greeterHey('Steven');
// Hey Steven

greet('Hello')('Chen');
//Hello Chen

// 轉換至 arrow Function 挑戰

const arrowGreet = greeting => {
  return name => console.log(`${greeting} ${name}`);
};

arrowGreet('Hello')('ArrowChen');
// Hello ArrowChen

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum = 999, name = 'checkName') {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode$}${flightNum}`,
      name,
    });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
// Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith');
// John Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa.bookings);
/*
0: {flight: 'undefined239', name: 'Jonas Schmedtmann'}
1: {flight: 'undefined635', name: 'John Smith'}
*/
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'Ew',
  bookings: [],
};

const book = lufthansa.book;
console.log(book);
// Does Not work
// book(23, 'Sarah Williams');
//卻有出錯的訊息;
// Cannot read properties of undefined (reading 'airline')
//為什麼會有這樣的原因呢
/*
book function 現在只是一個常規函數調用，在常規函數調用中
this 指向 undefined
那如何解決 this 現在指向 undefined的問題呢
*/

/*
this 想要的結果是
如果我們想預訂lufthansa的航班 this 應該指向 lufthansa
想預訂eurowings this 應該指向 eurowings
*/

//  可以使用 call apply & bind
// 引用的 function.(想指定的對象,輸入的值)
book.call(eurowings, 23, 'Sarah Williams');
// Sarah Williams booked a seat on Eurowings flight Ew23
const swiss = {
  airline: 'Swiss Air Lins',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);
// Mary Cooper booked a seat on Swiss Air Lins flight LX583

// Apply method
//引用的 function.(array Data)
const flightData = [583, 'George Cooper'];
// George Cooper booked a seat on Swiss Air Lins flight LX583
book.apply(swiss, flightData);
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
// Steven Williams booked a seat on Eurowings flight Ew23

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//with Event Listeners
lufthansa.plans = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plans++;
  console.log(`After${this.plans}`);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// <button class="buy">Buy new plane 🛩</button>
// AfterNaN

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax);
console.log(addTax(0.1, 200));
//220
// 原本 bind 第一個綁定的是 this key Word 但這個範例沒有 this 就可以設 null(也可以設定其他的值，因為什麼都不會發生)
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

// console.log(addVAT(100));

// 如果有使用像這樣的範例，參數順序相當的重要，第一個是要綁定的值

//轉換 箭頭函示
// const addVatArrow = rate => value => value + value * rate;
// console.log(addVatArrow(0.23, 100));

const addTaxTRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxTRate(0.23)(100));

const addTaxTRateArrow = rate => value => value + value * rate;

console.log(addTaxTRateArrow(0.23)(1000));

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join('\n')}\n(Write option number) `
      )
    );
    console.log(answer);
    // Register answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
const booker2 = secureBooking();

booker();
booker();
booker();

console.dir(booker);

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

h();
f();

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`WIll start boarding in ${wait} second`);
};

boardPassengers(180, 3);
// WIll start boarding in 3 second
// We are now boarding all 180 passengers
// There are 3 groups, each with 60 passengers
