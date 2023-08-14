import Turn from './Turn.js';

export default class Game {
  constructor(options, players, numberRounds, translator) {
    this.options = options;
    this.players = players;
    this.currentPlayer = null;
    this.numPlayers = players.length;
    this.numberRounds = numberRounds;
    this.iterator = 0;
    this.round = 1;
    this.turn = null;
    this.translator = translator;
  }

  startGame(){
    for (let i = 0; i < this.numberRounds; i++) {
      round = this.rounds.shift();
      //Update round number
      turn = round.nextTurn()
      turn.getText()
    }
  }

  NextTurn(){
    if (this.iterator >= this.numPlayers) {
      ++this.round;
      this.iterator = 0;
    }
    this.currentPlayer = this.players[this.iterator]
    let playersTmp = Array.from(this.players)
    playersTmp.splice(this.iterator, 1);
    document.getElementById('jugador-text').innerHTML = this.currentPlayer.getName()
    this.turn = new Turn(this.options,  this.currentPlayer, playersTmp, this.translator);
    document.getElementById('accio-text').innerHTML = this.turn.generateText()
    ++this.iterator;
  }
  
  NewTurn(){
    document.getElementById('accio-text').innerHTML = this.turn.generateText()
  }

}