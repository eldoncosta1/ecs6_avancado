const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

// o parametro done no it só concluirá o teste quando executarmos o done

let value = 0;

describe('Math class', function() {
  /* hooks: formas de executar codigo e evitar repetição
    beforeEach
    after
    afterEach
  */
 
  beforeEach(function() {
    value = 0;
  });

  it('Sum two numbers', function(done) {
    const math = new Math();
    this.timeout(3000); // parametro utilizado para aguardar a função responder uma vez que o mocha só aguarda 2000ms
    
    value = 5;

    math.sum(value, 5, (value) => {      
      //assert.equal(value, 10);
      expect(value).to.equal(10);
      done();
    });
  });
  
  it('Multiply two numbers', function() {
    const math = new Math();
    const obj = {
      name: 'Eldon Costa'
    };

    const obj2 = {
      name: 'Eldon Costa'
    };

    //assert.equal(math.multiply(value, 5), 0);
    //expect(math.multiply(value, 5)).to.equal(0);
    /*expect(obj)
      .to.have.property('name')
      .equal('Eldon Costa2');*/

    expect(obj).to.deep.equal(obj2);
    
  });

  // only executa somente o teste em questão
  /*it.only('Divide two numbers', function() {
    const math = new Math();

    assert.equal(math.divide(10, 5), 2);
  });*/

  // skip : pula a execução do teste
  it.skip('Skip the test');

  it.only('Calls req with sum and index values', function() {
    const req = {};
    const res = {
      load: sinon.spy(),
      /*load: function load() {
        console.log('Called');
      }*/
    };

    //sinon.spy(res, 'load');
    //sinon.stub(res, 'load').returns('xpto');

    const math = new Math();

    math.printSum(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;
    //expect(res.load.args[0][0]).to.be.equal('index');
    //expect(res.load.args[0][1]).to.be.equal(10);

  });

});