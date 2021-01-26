/**
 * Aplicando conceitos Rest, Spread Operator e Destructuring
 */

// Rest Operator: ...
function sum(...args) {
  return args.reduce((total, num) => total += num ,0);
}
console.log(sum(5, 5, 5, 2, 3));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
  return multiply(...rest);
}
console.log(sum(5, 5, 5, 2, 3));

// spread operator: strings, arrays, objects e objetos iteraveis

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(...args) {
  console.log(args);
}

//logArgs(...str);
//logArgs(...arr);

//const arr2 = [5, 6, 7].concat(arr);
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

const obj = {
  test: 123
};

const obj2 = {
  ...obj,
  test2: 'hello'
}

console.log(obj2);
