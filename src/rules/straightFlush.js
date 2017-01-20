const hasAStraight = require('./straight').check;
const hasAFlush = require('./flush').check;
const HandType = require('../HandTypes');

function check(hand) {
  return hasAFlush(hand) && hasAStraight(hand);
}

module.exports.check = check;
module.exports.type = HandType.STRAIGHTFLUSH;
