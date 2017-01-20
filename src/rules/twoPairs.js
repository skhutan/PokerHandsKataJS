const handOperations = require('./handOperations');
const HandType = require('../HandTypes');

const check = (hand) => handOperations.numberOfPairs(hand) == 2;

module.exports.check = check;
module.exports.type = HandType.TWOPAIR;
