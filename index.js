const ethers = require('ethers');
const driipSettlementChallengeContractAbi = require('./DriipSettlementChallenge.json').abi;

const provider = ethers.providers.getDefaultProvider('ropsten');
const driipSettlementChallengeContract = new ethers.Contract('0x3c360319679495a1590594613849fc2ee8d5833f', driipSettlementChallengeContractAbi, provider);

driipSettlementChallengeContract.proposalStageAmount
(
  "0x910c4BA923B2243dc13e00A066eEfb8ffd905EB0", 
  { ct: '0x0000000000000000000000000000000000000000', id: ethers.utils.bigNumberify(0) }
)
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.error(e);
  });
