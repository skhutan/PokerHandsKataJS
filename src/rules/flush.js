const HandType = require('../HandTypes');

function check(hand) {
  const suits = hand.map((card) => card.suit);
  const suitOfFirstCard = suits.pop();
  return suits.every(suit => suit == suitOfFirstCard);
}

module.exports.check = check;
module.exports.type = HandType.FLUSH;
