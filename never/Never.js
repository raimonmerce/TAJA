export default class Never {
  constructor(translator) {
    this.list = translator.translate("neverTasks")
  }

  nextTurn(){
    let it = Math.floor(Math.random() * this.list.length);
    return this.list[it]
  }
}