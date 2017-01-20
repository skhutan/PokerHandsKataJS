const isRepeated = (currentCard, hand, count) => hand.filter((card) => currentCard.value === card.value).length == count;

const notContains = (element, checkedElements) => checkedElements.filter((checkedElement) => checkedElement.value === element.value).length == 0;

const sortAscendingByWeight = (hand) => hand.sort((left, right) => left.weight - right.weight);

const numberOfPairs = (hand) => {
  const isTwice = (element, list) => isRepeated(element, list, 2);
  const hasNotCheckedBefore = (element, checkedElements) => notContains(element, checkedElements);

  let checkedElements = [];
  hand.forEach(function (element, index, elements) {
    if(hasNotCheckedBefore(element, checkedElements) && isTwice(element, elements)) {
      checkedElements.push(element);
    }
  });

  return checkedElements.length;
};

module.exports = {
  isRepeated: isRepeated,
  notContains: notContains,
  sortAscendingByWeight: sortAscendingByWeight,
  numberOfPairs: numberOfPairs
};
