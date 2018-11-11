var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsCliked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cardsArr) {
  for(var i=0; i<cardsArr.length-1; i++){
    var random = Math.floor(Math.random()*cardsArr.length)
    var elem = cardsArr[i];
    cardsArr[i] = cardsArr[random];
    cardsArr[random] = elem;
  }
  return cardsArr;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsCliked ++;
  if (firstCard == secondCard) {
    this.pairsGuessed ++;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 0){
    return false;
  }
  return this.pairsGuessed == cards.length/2;
};