# NewChain Contract Examples
These simple examples are for the beginner of newchain contract development.
If you have any problem, let me know.

# Steps for create your first project `hello`

## install newtruffle
```
npm install -g newtruffle
```

## initialize project
```
mkdir hello
cd hello
newtruffle init
echo "{\"name\":\"hello\"}" >package.json 
npm install newtruffle-hdwallet-provider
```

## config the network parameter in truffle-config.js
```
....
const HDWalletProvider = require("newtruffle-hdwallet-provider");
...
    testnet: {
      provider: function() { 
        return new HDWalletProvider("<your mnemonic>", 'https://rpc1.newchain.newtonproject.org', "testnet") 
      },
      network_id: "1007" // newchain testnet id
    },
 ...
```
Replace `<your mnemonic>` by your mnemonic.

## create contract
### execute command 
```
newtruffle create contract Counter
```

### edit the Counter.sol under contracts directory
```
pragma solidity ^0.5.0;


contract Counter {
  uint count;
  constructor() public {
    count = 0;
  }
  function increment() public {
    count = count + 1;
  }

  function get() public view returns (uint) {
    return count;
  }
}
```

## compile contract
```
newtruffle compile
```

## test contract
### create the testcase file CounterTest.js under `test` directory
```
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
```
### execute command
```
newtruffle test --network testnet
```
