export default class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.parts = {
      "head": false,
      "rightHand": false,
      "leftHand": false,
      "rightFeet": false,
      "leftFeet": false,
      "rightKnee": false,
      "leftKnee": false,
      "breast": false,
      "ass": false,
      "genitals": false
    }
  }

  getName(){
    return this.name
  }

  ocupyPart(key){
    this.parts[key] = true
  }

  deocupyPart(key){
    this.parts[key] = false
  }

  getOcupiedParts() {
    return this.parts
  }
}