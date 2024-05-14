function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const a = 10;
const b = 5;

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

const Inform = (firstName, location, hobby) => {
  console.log(
    "Hi, my name is " +
      firstName +
      " I live in " +
      location +
      " and enjoy " +
      hobby
  );
};

let firstName = "Ronnapat";
let location = "Bangkok";
let hobby = "Watching movie";

Inform(firstName, location, hobby);
