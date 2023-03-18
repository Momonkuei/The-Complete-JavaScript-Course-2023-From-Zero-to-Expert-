'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName},You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // 創建與外部作用域變量同名的新變量
//       var millenial = true;
//       // 重新分配外部作用域的變量;
//       output = 'New Output!';
//       const firstName = 'Steven';
//       const str = `Oh,and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str); // 在block 作用域之外，所以讀取不到，但是只限定 let & const
//     console.log(millenial); //雖然在 block 之外，但是使用 var 所以還是讀取得到
//     // add(2, 3); // function 也會是到 block的影響 ，所以會顯示  not defined －但僅適用於嚴格模式，當嚴格模式關閉時，就可以運行了
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age); // 在 function 作用域之外，所以讀取不到

// Variables
// console.log(me); // 被 hoistion 至 undefined
// console.log(job); //Uncaught ReferenceError
// console.log(year); //Uncaught ReferenceError

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;

// functions

// console.log(addDecl(2, 3)); //5
// console.log(addEcpr(2, 3)); //Uncaught ReferenceError
// console.log(addArrow(2, 3)); //Uncaught ReferenceError

// function addDecl(a, b) {
//   return a + b;
// }

// const addEcpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

// if (!numProducts) deleteShoppingCart(); //當沒有產品時，我要刪除購物車
// // 但結果是即使有產品，但還是會刪除購物車，原因是 hoisting 造成 numProducts 為 undefined 而判定為 false 進而 逕行觸發

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); //true => 等同 x 是在 window 中宣告的
// console.log(y === window.y); //false
// console.log(z === window.z); //false

// var firstName = 'Matilda';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);
//     const self = this;
//     const isMillenial = function () {
//       console.log(self); //undefined
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// //在arrow function會抓取父層的this,但是在 物件中卻不是 block，所以這邊的this 在嚴格模式下 windows.firstName是undefined

// jonas.calcAge(); //46

// //Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// addExpr(2, 5);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;

// friend.age = 27;
// console.log('Friend:', friend);
// console.log('me:', me);

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; //連同 jessica 也會跟著更改
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
