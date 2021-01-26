// Introdução a Generators

// Symbols
const uniqueId = Symbol('Hello');

const obj = {
  [uniqueId]: 'Hello'
};

console.log(obj);

// Well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj = {
  [Symbol.iterator]() {

  }
}

// const arr = [1, 2, 3, 4];
// const it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const str = 'Digital Innovation One';


const obj = { 
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        i++;

        return {
          value: this.values[i - 1],
          done: i > this.values.length
        }
      }
    }
  }
}

const it = obj[Symbol.iterator]();
console.log(it.next());

// Generators

function* hello() {
  console.log('Hello');
  yield 1;
  
  console.log('From');  
  const value = yield 2;

  console.log(value);    
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside'));

function* naturalNumbers() {
  let number = 0;
  while(true) {
    yield number;
    number++;
  }
}

const it = naturalNumbers();
console.log(it.next());

const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }
}

for (let value of obj) {
  console.log(value);
}