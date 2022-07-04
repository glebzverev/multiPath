// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const Web3 = require('web3');
const fs = require('fs');
// const JSON = require('JSON');

const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/your-api-key');

// const contractAbi = require('../build/contracts/MultiPath.json');

// const contractJson = fs.readFileSync('C:/Users/23396/multiPath/build/contracts/MultiPath.json');

// import multiPath from '../build/contracts/MultiPath.json';
const multiPath  = require('../build/contracts/MultiPath.json');

// contractInstance = new web3.eth.Contract(abi);

// async function main() {

  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
var Path = {
    'to': 0x0505c09E927d280845f83c7CC62B0434E653BDe7,
    'totalNetworkFee': 0,
    'adapters': ['0xFE52A550fCD9b47FfE1C7F692AC89C2d06529C30']
};

var SellData  = {
    'fromToken':   0xc2d9D8a97A6E51ADaf22ba63A7ee1E1A0338d384,
    'fromAmount':  100000000000000,
    'toAmount':     10000000000,
    'expectedAmount':  100000000,
    'beneficiary':  0x0505c09E927d280845f83c7CC62B0434E653BDe7,
    'path': Path, 
    'partner': 0x0000000000000000000000000000000000000000,
    'feePercent': 0,
    'permit': '0x',
    'deadline':  0,
    'uuid':  '0x0000000000000000'
} 

// web3.eth.accounts.wallet.add(owner);

// var contractAbi = getJSON("../artifacts/contracts/MultiPath.json");

// var contractAbi = require("../build/contracts/MultiPath.json");

// const contractAddress = "0xC18109982aa8927ab4469B4ce7648288B72C1881";

var Mycontract = new web3.eth.Contract(multiPath.abi);

Mycontract.options.address = web3.utils.toChecksumAddress('0xC18109982aa8927ab4469B4ce7648288B72C1881');

// web3.eth.defaultAccount = owner.address;

console.log(Mycontract.methods.multiSwap(SellData));
// }
