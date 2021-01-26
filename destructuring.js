// Destructuring Assignment

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var [apple, banana, orange, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(tomato);

var obj = {
  name: 'Eldon',
  props: {
    age: 30,
    colors: ['blue', 'red']
  }
};

var  {name,  props:{age, colors } }  = obj;
console.log(colors);

var arr = [{ name: 'Apple', type: 'fruit'}, { name: 'Banana', type: 'fruit'}];
var [{ name }] = arr;
console.log(name);

// functions
function sum(...rest) {
  console.log(rest);
  return rest.reduce((acc, value) => acc += value, 0);
}

console.log(sum(5, 5));
