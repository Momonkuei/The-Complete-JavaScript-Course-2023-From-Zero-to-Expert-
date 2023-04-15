'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties實例屬性
  (this.firstName = firstName), (this.birthYear = birthYear);

  // never to use regular function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
  this.calcAge = () => {
    console.log(2037 - this.birthYear);
  };
};

// Constructor Functions 與regular function 呼叫方式不同在於 使用 new keyword

const jonas = new Person('Jonas', 1991);

console.log(jonas);
console.log(jonas.calcAge);
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
