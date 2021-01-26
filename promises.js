// Promises
const doSomethingPromise = () => new Promise((resolve, reject) => {
  //throw new Error('Something went wrong');
  setTimeout(function() {
    resolve('First data');
  }, 1500);
});


const doOtherThingPromise = () => new Promise((resolve, reject) => {
  // did something  
  //throw new Error('oops');
  setTimeout(function() {
    resolve('Second data')
  }, 1000);
});

/**
 * Status de uma promise:
 * - Peding: em execução
 * - Fulfilled: finalizou execução
 * - Rejected: rejeitada devido a algum erro
 * 
 */
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
  console.log(data[0].split(''));
  console.log(data[1].split(''));
}).catch(err => {
  console.log(err)
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
  console.log(data);
});

doSomethingPromise()
  .then(data => { 
    console.log(data.split(''));
    return doOtherThingPromise();
  })
  .then(data2 => console.log(data2.split('')))
  .catch(error => console.log('Ops', error));


// callbacks
/*function doSomething(callback) {
  setTimeout(function() {
    callback('First data')
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function() {
    callback('Second data')
  }, 1000);
}

function doAll() {
  try {

    doSomething(function(data) {
      var processedData = data.split('');
      
      try {

        doOtherThing(function(data2) {
          var processedData2 = data2.split('');
          
            try {

              setTimeout(function() {
                console.log(processedData, processedData2);
              }, 1000);
            } catch(err) {

            }
          })
      } catch(err) {

      }
    });
  } catch(err) {
    // handle error
  }
}

doAll();*/