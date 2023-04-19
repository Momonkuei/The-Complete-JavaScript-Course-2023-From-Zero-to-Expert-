'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties實例屬性
  (this.firstName = firstName), (this.birthYear = birthYear);

  // never to use regular function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
  // this.calcAge = () => {
  //   console.log(2037 - this.birthYear);
  // };
};

// Constructor Functions 與regular function 呼叫方式不同在於 使用 new keyword

const jonas = new Person('Jonas', 1991);

console.log(jonas);
// console.log(jonas.calcAge);
/*
  //使構造函數工作的訣竅
  1. New {} is created
  2. function is called , this = {}
  3.{} linked to prototype
  4. function automatically return {}
*/

const matilda = new Person('Matilad', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda);

//判斷 是否為同類型的class
console.log(jonas instanceof Person); //true

// Prototypes原型
console.log(Person.prototype); //{constructor: ƒ}
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
//{calcAge: ƒ, constructor: ƒ}
//繼承的 function

console.log(jonas.__proto__ === Person.prototype);
//true

console.log(Person.prototype.isPrototypeOf(jonas));
//true
console.log(Person.prototype.isPrototypeOf(Person));
//false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.species, matilda.species);
//Homo Sapiens Homo Sapiens

//檢查是否有繼承
console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false
//species  並不真正在 jonas 對象內部

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
//屬於 object 的原型
console.log(jonas.__proto__.__proto__.__proto__);
//null

console.log(Person.prototype.constructor);
// 得到函數本身

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__);
//屬於 object 的原型

console.log(arr.__proto__.__proto__ === jonas.__proto__.__proto__);
//true

//創建一個新的 array method
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
//(4) [3, 6, 5, 9]

const h1 = document.querySelector('h1');

// 取得DOM的原型
console.dir(h1);

console.dir(x => x + 1);

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Cars.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Cars('BMW', 120);

console.log(bmw);

const mercedes = new Cars('Mercedes', 95);

console.log(mercedes);
