//MODERN JS

//Khai báo sử dụng cú pháp JS mới
"use strict";

console.log("Tui moi hoc js ne", "nua ne haha");

/**
 * VARIABLE
 *
 * - Use 'const' for unchanged variable
 * - use 'let' for changeing variable
 * - Don't use the old var
 */

const name = "Truong";
//Không được thay đổi giá trị khi khai báo const, hằng số
//  name='Long';
console.log("My name is", name);

let age = 18;
age = 20;
console.log("My age is", age);

//Template String
const template = `My age is: ${age}`;
const template1 = "My name is: " + age;
console.log(template);

/**
 * OBJECT
 *
 */
const student = {
  name: "Truong",
  age: 20
};
console.log("My name is:", student.name);

const studentB = student;
studentB.name = "Long";
console.log("Name", student.name);

//clone Object
const studentC = {
  ...student
};
studentC.name = "Trung";
console.log("Name 3", studentC.name);

/**
 * DATA TYPES
 *
 * - number
 * - string
 * - boolean
 * - object: Math, Number, String, Array, Date, Symbol,...
 * - symbol
 * - null vs undefined
 */

const sumA = 10;
const sumB = 10.5;

const name = "Truong Chau";
const combineName = "Truong" + "20";
const combineNameB = `My name is ${name} ${sumA}`;
console.log(combineNameB);

const isMale = true;
const hasCar = false;
const containsHello = true;

/**
 * FUNCTION
 */
function calculateAge(year) {
  //input: year
  //out: age
  //validate input
  if (year <= 0) {
    return -1;
  }
  const age = 2020 - year;
  return age;
}
console.log(calculateAge(1995));
