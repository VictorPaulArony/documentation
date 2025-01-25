const Web3 = require('web3'); // Use this syntax for CommonJS
const fs = require('fs');

const web3 = new Web3('http://127.0.0.1:8545'); // Connect to Ganache

(async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying from account:", accounts[0]);

    // Read compiled contract
    const compiled = JSON.parse(fs.readFileSync('HelloWorld.json', 'utf8'));
    const abi = compiled.contracts['HelloWorld.sol:HelloWorld'].abi;
    const bytecode = compiled.contracts['HelloWorld.sol:HelloWorld'].bin;

    // Deploy contract
    const contract = new web3.eth.Contract(abi);
    const deployedContract = await contract
        .deploy({ data: '0x' + bytecode })
        .send({ from: accounts[0], gas: 3000000 });

    console.log("Contract deployed at:", deployedContract.options.address);
})();
