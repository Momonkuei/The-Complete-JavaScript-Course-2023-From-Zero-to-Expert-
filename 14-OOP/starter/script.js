'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties實例屬性
  console.log(this);
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

//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  //方法將被添加到 .prototype 屬性
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  great() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.age); //41

// PersonCl {firstName: 'Jessica', birthYear: 1996}

jessica.calcAge(); //41

console.log(jessica.__proto__ === PersonCl.prototype); //true

// PersonCl.prototype.great = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.great();
//Hey Jessica

// 1.Classes are Not hoisted
// 2.Classes are first-class citizens
// 3.Classes are executed in stric mode

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
//300

account.latest = 50;
console.log(account.movements);
//(5) [200, 530, 120, 300, 50]
