'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
/*
thu
fri
sat
*/
const properties = Object.keys(openingHours);
console.log(properties); //(3) ['thu', 'fri', 'sat']

//應用
console.log(`We are open ${properties.length} days`);
//We are open 3 days

let openStr = `We are open ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);
/*
(3) [{…}, {…}, {…}]
0: {open: 12, close: 22}
1: {open: 11, close: 23}
2: {open: 0, close: 24}
*/

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);
//(3) [Array(2), Array(2), Array(2)]
//在拆解其一
/*
0: Array(2)
0: "thu"
1: {open: 12, close: 22}
*/

for (const x of entries) {
  console.log(x);
}

/*
(2) ['thu', {…}]
(2) ['fri', {…}]
(2) ['sat', {…}]
*/

//轉變成

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log(menu.entries());
// 得到一個奇怪的Array Iterator {}
//展開
console.log([...menu.entries()]);

// 根據上面的顯示，轉換運用

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1},${el}`);
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1

for (const [num, player] of game.scored.entries()) {
  // console.log(num, player);
  console.log(`Goal${num + 1} : ${player}`);
}

//2
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'draw:' : `victory ${game[team]}:`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//4
const scorers = {};
// for (const [num, player] of game.scored.entries()) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//117
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);
// //Set(3) {'Pasta', 'Pizza', 'Risotto'}
// //String

// console.log(new Set('Jonas'));
// //Set(5) {'J', 'o', 'n', 'a', 's'}

// console.log(ordersSet.size); //3
// console.log(ordersSet.has('Pizza')); //true
// console.log(ordersSet.has('bread')); //false

// //添加
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// console.log(ordersSet);
// //Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

// //刪除
// ordersSet.delete('Garlic Bread');
// console.log(ordersSet);
// //Set(3) {'Pasta', 'Pizza', 'Risotto'}

// //清除set中所有的內容
// // ordersSet.clear();
// // console.log(ordersSet); //{size: 0}

// // 迭代的運用

// for (const order of ordersSet) console.log(order);

// /*
// Pasta
// Pizza
// Risotto
// */

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // const staffUnique = new Set(staff);
// //轉變成
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);
// //(3) ['Waiter', 'Chef', 'Manager']
// console.log(new Set(staff).size); //3

// console.log(new Set('jonasschmedtmann').size); //11

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// //這樣調用 set 方法，不僅更新調用它的地圖，它同時也會返回
// //Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze,Italy', 2 => 'Lisbon, Portugal'}

// //大量輸入值的運作方式
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// //取值的方式
// console.log(rest.get('name'));
// console.log(rest.get(1));
// console.log(rest.get(true));

// // 從JS當中取出時間
// const time = 21;
// rest.get(time > rest.get('open') && time < rest.get('close'));
// //We are open :D

// console.log(rest.has('categories')); //true
// console.log(rest);
// rest.delete(2); //刪除key 為２的值
// console.log(rest);
// console.log(rest.size); //7
// // rest.clear(); //清除所有的資料
// // console.log(rest);
// // console.log(rest.size); //０

// //引用特別的值

// rest.set([1, 2], 'Test');
// //所引用的值 ，
// console.log(rest);
// //{Array(2) => "Test"}

// // 但是可以這樣取值嗎？
// console.log(rest.get([1, 2]));
// //undefined
// //那為什麼會這樣呢？
// // 這是因為這兩組 [1,2] 並不是同一個對象

// //轉變
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr)); //test

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// //9: {h1 => "Heading"}

//118

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 😀'],
  [false, 'Try again!'],
]);

console.log(question);

/*
Map(7) {'question' => 'What is the best programming language in the world?', 1 => 'c', 2 => 'java', 3 => 'JavaScript', 'correct' => 3, …}
*/

// Convert object to map 將對象轉換為地圖
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}

for (const [key, value] of hoursMap) {
  console.log(key, value);
}

/*
thu {open: 12, close: 22}
fri {open: 11, close: 23}
sat {open: 0, close: 24}
*/

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
const answer = 3;

const replay = answer === question.get('correct') ? true : false;

console.log(question.get(replay));
//Correct 😀

//Convert map to array 把 map 轉換成數組
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log('B737'[0]);

console.log(airline.length); //10
console.log('B737'.length); //4

//尋找第一個字母的位置
console.log(airline.indexOf('r')); //6

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😁');
  else console.log('You are so lucky 😀');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLocaleLowerCase()); //tap air portugal
console.log(airline.toLocaleUpperCase()); //TAP AIR PORTUGAL
//直接用 字串去轉換
console.log('jonas'.toLocaleUpperCase()); //JONAS

//Fix capitalization in name
//把自己的名字打錯了
const passenger = 'jOnAs'; //應該看起來像這樣 Jonas
console.log(
  passenger[0].toLocaleUpperCase() + passenger.slice(1).toLocaleLowerCase()
);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io\n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); //hello@jonas.io

//簡化版
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail); //hello@jonas.io

//ES2019
// 有 trimS
loginEmail.trimStart();
loginEmail.trimEnd();

//replacing 更換
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$');
console.log(priceUS);
//288,97$

const announcement =
  'All passengers come to Boarding door 23. Boarding door 23 !';

//replace 會創造一個全新的字串
//只能更換第一個 gate
console.log(announcement.replace('gate', 'door'));
//All passengers come to Boarding door 23. Boarding door 23 !
//更換全部
console.log(announcement.replaceAll('gate', 'door'));
//All passengers come to Boarding door 23. Boarding door 23 !

//正則表達式
// * /dooe/g * g代表 global
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW AirBus family');
}

//Pracice exercise
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are Not allowed in board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop,some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName); //Jonas Schmedtmann

//join
const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);
//Mr. Jonas SCHMEDTMANN

const capitalizName = function (name) {
  const nameArr = name.split(' ');
  const newNameArr = [];
  for (const n of nameArr) {
    // const str = n[0].toLocaleUpperCase() + n.slice(1).toLocaleLowerCase();
    const str = n.replace(n[0], n[0].toLocaleUpperCase());
    newNameArr.push(str);
  }
  console.log(newNameArr);
};

const Passenger = 'jessica ann smith davis';
capitalizName(Passenger);
//(4) ['Jessica', 'Ann', 'Smith', 'Davis']

//padding
const message = 'Go to gate 23!';
//str.padStart(想要的文字長度,填充的內容)
console.log(message.padStart(25, '+'));
//+++++++++++Go to gate 23!
console.log('Jonas'.padStart(25, '+'));
// ++++++++++++++++++++Jonas
console.log(message.padStart(25, '+').padEnd(35, '+'));
//+++++++++++Go to gate 23!++++++++++

// example
const maskCreditCard = function (num) {
  const str = num + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};

maskCreditCard(4636706101304885);

//Repeat

//str.repeat(重複次數)
const message2 = 'Bad weaather... All Departues Delayed...';
console.log(message2.repeat(2));

//Bad weaather... All Departues Delayed...Bad weaather... All Departues Delayed...
