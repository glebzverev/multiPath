const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("multiPath", function () {
  it("Should return the new greeting once it's changed", async function () {
    const AugustusSwapper = await ethers.getContractFactory("AugustusSwapper");
    const augustusSwapper = await AugustusSwapper.deploy("0x0505c09E927d280845f83c7CC62B0434E653BDe7");
    await augustusSwapper.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await augustusSwapper.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await augustusSwapper.greet()).to.equal("Hola, mundo!");
  });
});
