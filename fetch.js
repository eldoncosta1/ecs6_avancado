fetch('http://localhost/es6/data.json', {
  /*method: 'post',
  body: JSON.stringify*/
})
  .then(responseStream => { 
    if (responseStream.status === 200) {
      return responseStream.json();
    } else {
      throw new Error('Request error');
    }
  })
  .then(data => {
    console.log(data);
  }).catch(err => {
    console.log('Erro: ', err);
  });

  // Es7 Async / Await

const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123456);
  }, 1000);
})

  const simpleFunction = async () => {
    //throw new Error('Oh no');
    const data = await asyncTimer();
    console.log(data)
    const dataJSON = await fetch('http://localhost/es6/data.json').then(resStream => resStream.json());
    return dataJSON;
  }

  simpleFunction().then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  })

  // EventEmitter: exlusivo do node
const EventEmitter = require('events');

class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data);
  }
}

const users = new Users();
users.on('User logged', data => {
  console.log(data);
});

// consumir apenas 1 vez
users.once('User logged', data => {
  console.log(data);
});

users.userLogged({ user: 'Eldon Costa' });

