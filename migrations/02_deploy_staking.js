const BigNumber = require('bignumber.js');
const AleStakingToken = artifacts.require('./AleStakingToken.sol');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        AleStakingToken, 
        accounts[1],
        new BigNumber(10).pow(18).multipliedBy(525).toString(10),
    );
};
