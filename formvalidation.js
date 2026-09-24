// let age = 20;
// const name = "Anie";
// if (age < 18) {
//   console.log(name, " is a teenager.");
// } else if (age >= 18 && age <= 40) {
//   console.log(name, " is an adult");
// } else {
//   console.log(name, " is an old man/women.");
// }

// let marks = 50;
// if (marks >= 90) {
//   console.log("Grade A.");
// } else if (marks >= 79) {
//   console.log("grade B");
// } else if (marks >= 60) {
//   console.log("grade C");
// } else if (marks >= 50) {
//   console.log("Grade D");
// } else {
//   console.log("Grade F");
// }

// let temp = 37;
// let unit = "F";
// if (unit === "C") {
//   let f = (temp * 9) / 5 + 32;
//   console.log("temp in farenhiet is", f);
// } else if (unit === "F") {
//   let c = ((temp - 32) * 5) / 9;
//   console.log("temp in celsius is", c);
// } else {
//   console.log("invalid");
// }

// function greet(name) {
//   return "hello " + name;
// }
// console.log(greet("anie"));

// const num = (n) => {
//   n % 2 == 0
//     ? console.log(n, "is a even Number.")
//     : console.log(n, "is an odd number.");
// };
// num(5);

// const double = (number) => number * 2;
// console.log(double(4));

// const fullname = (firstName, lastname) => `${firstName} ${lastname}`;

// console.log(fullname("aiza", "ali"));
console.log("ForEach loop");
const number = [9, 5, 3, 4];
number.forEach((element) => console.log(element * 2));

console.log("Map loop");
const n = [2, 4, 6, 8];
const double = n.map((num) => num * 10);
console.log(double);

console.log("Filter:");
const x = [1, 3, 5, 7, 9, 0];
const z = x.filter((y) => y >= 3);
console.log(z);

console.log("FInd: ");
// const m = [1, 3, 5, 7, 9, 0];
// const b = m.filter((y) => y == 3);

const user = [
  {
    id: 1,
    name: "Anie",
    sem: "5th",
    dept: "CS",
    marks: 24,
  },
  {
    id: 2,
    name: "nawal",
    sem: "6th",
    dept: "English",
    marks: 21,
  },
  {
    id: 3,
    name: "Ansa",
    sem: "9th",
    dept: "Physics",
    marks: 23,
  },
];
const b = user.find((st) => st.id == 2);
console.log(b);

console.log("FindIndex ");
const c = user.findIndex((d) => d.id == 3);
console.log(c);

console.log("some");
const f = user.some((std) => std.marks >= 50);
console.log(f);

console.log("Every(): ");
const e = user.every((b) => b.marks >= 20);
console.log(e);

console.log("reduce()");
const max = user.reduce((acc, crntVal) => {
  return crntVal.marks > acc.marks ? crntVal : acc;
}, user[0]);
console.log(max);

const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

const ob = fruits.reduce((acc, crntVal) => {
  if (acc[crntVal]) {
    acc[crntVal]++;
  } else {
    acc[crntVal] = 1; // 'crntval' ko 'crntVal' kar diya
  }
  return acc;
}, {});

console.log(ob);
// Output: { apple: 3, banana: 2, mango: 1 }
