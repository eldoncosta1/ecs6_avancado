class app {
  constructor() {
    this.bind();
  }

  bind() {
    //debugger; equivalente a atribuir um breakpoint no navegador
    document.querySelector('.add-button').addEventListener('click', () => {
      this.handleClick(1);
    });

    document.querySelector('.sub-button').addEventListener('click', () => {
      this.handleClick(-1);
    });
  }

  handleClick(val) {
    const counterEl = document.querySelector('.counter');
    const value = parseInt(counterEl.innerText);

    counterEl.innerText = value + val;
  }
}

new app();

// Console

console.log('Blac text');
console.warn('Yellow text with alert');
console.error('Red error text');
console.trace('Informação de onde o console está sendo executado');

console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

console.time('Log time');
setTimeout(() => {
  console.timeEnd('Log time')
}, 2000);

console.table(['Eldon Costa', 'Digital Innovation One']);
console.assert(1 === 0, 'Ops')

console.log('%c styled log', 'color: blue; font-size: 40px');