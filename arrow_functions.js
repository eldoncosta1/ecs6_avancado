var sumOld = function(a, b) {
  return a + b;
}

// Arrow functions
var createObj = () => ({ test: 123 });
console.log(createObj);

var sum = (a, b) => a + b;
console.log(sum(5,15));

function Car() {
  this.foo = 'bar';
}
console.log(new Car());

var obj = {
  showContext: function showContext() {
    setTimeout(() => {
      this.log('after 1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value)
  }
}

obj.showContext('text');

/**
 * Default Functions Arguments
 */

// Lazy evaluation
function randomNumber() {
  console.log('Generating random number..');
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {  
  return a * b;  
}

console.log(multiply(5));
console.log(multiply(51));


// Enhaced Object Literals

var prop1 = 'Digital Innovation One';

function method1() {
  console.log('method called');
}

var obj = {
  prop1,
  sum: function(a, b) {
    return a + b;
  },
  sum1(a, b) {
    return a + b;
  }

};

console.log(obj.sum1(1, 5));
