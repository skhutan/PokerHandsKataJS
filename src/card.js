const weightOrder = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

function Card(value, suit) {
  let self = this;
  self.value = value;
  self.suit = suit;
  self.weight = weightOrder.indexOf(self.value);
  return {
    value: self.value,
    weight: self.weight,
    suit: self.suit,
    equals: function (otherCard) {
      return self.value == otherCard.value;
    },
    asString: function () {
      return self.value + self.suit;
    }
  };
}

module.exports = Card;
