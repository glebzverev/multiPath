module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 50000,
      gasPrice: 5e8,
      networkId: '*',
    },
  },
};
