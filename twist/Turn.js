import Player from '../Player.js';

const maxDrinks = 3;

export default class Turn {
  constructor(options, player, players, translator) {
    this.options = options;
    this.player = player;
    this.players = players;
    this.translator = translator;

    this.generalTasks = translator.translate("generalTasks")
    this.alcoholTasks = translator.translate("alcoholTasks")
    this.extremeTasks = translator.translate("extremeTasks")
    this.generalParts = translator.translate("generalParts")
    this.extremeParts = translator.translate("extremeParts")

    this.tasks = this.generalTasks
    this.parts = this.generalParts

    if (options["checkAlcohol"]){
      this.tasks = [...this.tasks, ...this.alcoholTasks];
    }

    if (options["checkExtreme"]){
      this.tasks = [...this.tasks, ...this.extremeTasks];
      this.parts = [...this.parts, ...this.extremeParts];
    }
  }

  getRandomPart(){
    let it = Math.floor(Math.random() * this.parts.length)
    return this.parts[it]
  }

  getRandomExtremePart(){
    let it = Math.floor(Math.random() * this.extremeParts.length)
    return this.extremeParts[it]
  }

  getRandomPlayer(){
    let it = Math.floor(Math.random() * this.players.length)
    return this.players[it].getName()
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * (maxDrinks - 1) + 2);
  }

  getFullSentence(text){
    if (text.includes("$num"))text = text.replace("$num", this.getRandomNumber());
    if (text.includes("$selfPlayer")) text = text.replace("$selfPlayer", this.player.getName());
    if (text.includes("$otherPlayer")) text = text.replace("$otherPlayer", this.getRandomPlayer());
    if (text.includes("$part")) text = text.replace("$part", this.getRandomPart());
    if (text.includes("$part2")) text = text.replace("$part2", this.getRandomPart());
    if (text.includes("$extremePart")) text = text.replace("$num", this.getRandomExtremePart());
    return text;
  }

  generateText(){
    let text = "text"
    if (Math.floor(Math.random() * 2) == 0){
      text = this.translator.translate("basicTask") 
    } else {
      text = this.tasks[Math.floor(Math.random() * this.tasks.length)]; 
    }
    text = this.getFullSentence(text);
    text = this.capitalizeFirstLetter(text)

    return text
  }
}