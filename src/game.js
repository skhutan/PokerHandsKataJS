let pokerHandTypeChecker = require('../src/pokerHandTypeChecker');

let evaluator = (play) => {
  if(play.firstPlayerHandType.weight > play.secondPlayerHandType.weight) {
    return {
      name: play.firstPlayer.name,
      handType: play.firstPlayerHandType.name
    };
  } else {
    return {
      name: play.secondPlayer.name,
      handType: play.secondPlayerHandType.name
    };
  }
};

let printer = winner => winner.name + ' wins. - with ' + winner.handType;

const play = (firstPlayer) => {
  this.firstPlayer = firstPlayer;
  this.firstPlayerHandType = pokerHandTypeChecker.check(firstPlayer.hand);
  return {
    versus: (secondPlayer) => {
      this.secondPlayer = secondPlayer;
      this.secondPlayerHandType = pokerHandTypeChecker.check(secondPlayer.hand);
      let winner = evaluator(this);
      return printer(winner);
    }
  };
};

module.exports.play = play;
