const Counter = artifacts.require('Counter');

contract('Counter', function(accounts) {
  let counter;

  beforeEach(async function() {
    // Deploy contracts
    counter = await Counter.new();
    console.log("new contract address:" + counter.address);
  });

  it('test the get function', async function() {
    await counter.increment();
    var result = await counter.get();
    console.log("result is " + result);
  });
});
