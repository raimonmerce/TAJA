import Never from './never/Never.js';
import Player from './Player.js';
import Game from './twist/Game.js';
import Translate from './translate.js';


let never;
let menus = [
  "menu",
  "never",
  "twist_options",
  "twist_players",
  "twist_game",
]
var currentPlayers = 2;
var game;
let players = [];
let translator;

function showMenu(str) {
  if (menus.includes(str)){
    for (let i = 0; i < menus.length; i++) {
      let menu = menus[i];
      if (menu != str) {
        document.getElementById(menu).classList.add("menu-hidden");
        if (document.getElementById(menu + "_f")) document.getElementById(menu + "_f").classList.add("menu-hidden");
      } else {
        document.getElementById(menu).classList.remove("menu-hidden");
        if (document.getElementById(menu + "_f")) document.getElementById(menu + "_f").classList.remove("menu-hidden");
      }
    }
  }
}

function GoToNever() {
  showMenu("never");
  document.getElementById('header_name').innerHTML = "Yo Nunca"
  document.getElementById('header').style.backgroundColor = "#b286e0"
  never = new Never(translator) 
  NeverNext()
}

function NeverNext() {
  document.getElementById('never_text').innerHTML = never.nextTurn();
}

function GoToTwist(){
  showMenu("twist_options")
  document.getElementById('header_name').innerHTML = "TwistYou"
  document.getElementById('header').style.backgroundColor = "#ed8824"
}

function GoToTwistPlayers() {
  showMenu("twist_players")
  currentPlayers = parseInt(document.getElementById('mode-select').value);
  for (let i = 1; i <= currentPlayers; i++) {  
    document.getElementById('linea').innerHTML += `<div id="djug${i}" class = 'menu-row'><input type="text" id="ijug${i}" class="dropdown" placeholder="${translator.translate("player")} ${i}"></div>`;
  } 
}

function GoToTwistGame() {
  showMenu("twist_game")
  players = []
  for (let i = 1; i <= currentPlayers; i++) {
    let namePlayer = document.getElementById("ijug" + i).value || document.getElementById("ijug" + i).placeholder;
    let player = new Player(i, namePlayer);
    players.push(player)
  }
  let numberRounds = 100;
  let options = {
    "checkAlcohol": document.getElementById("checkAlcohol").checked,
    "checkExtreme": document.getElementById("checkExtreme").checked
  }
  game = new Game(options, players, numberRounds, translator) 
  TwistSpin();
}

function TwistSpin() {
  game.NextTurn();
}

function TwistSpinImp(){
  game.NewTurn();
}

function translate(lng, tagAttr){
  translator = new Translate();
  translator.init(tagAttr, lng);
  translator.process();
}

function GoToMenu(){
  showMenu("menu")
  document.getElementById('header_name').innerHTML = "TAJA"
  document.getElementById('header').style.backgroundColor = "#b14141"
}

function init() {
  translate('esp','lng-tag')
  let dropdown = document.getElementById('language-picker-select');
  dropdown.addEventListener('change', function() {
    translate(dropdown.value,'lng-tag')
  });

  document.getElementById('GoToNever').onclick = GoToNever;
  document.getElementById('NeverNext').onclick = NeverNext;
  document.getElementById('NeverBack').onclick = GoToMenu
  document.getElementById('GoToTwist').onclick = GoToTwist;
  document.getElementById('TwistBack').onclick = GoToMenu
  document.getElementById('TwistGoToPlayers').onclick = GoToTwistPlayers;
  document.getElementById('TwistGoToGame').onclick = GoToTwistGame;
  document.getElementById('TwistBackToOptions').onclick = function() {
    document.getElementById('linea').innerHTML = "";
    showMenu("twist_options")
  };
  document.getElementById('TwistSpin').onclick = TwistSpin;
  document.getElementById('TwistSpinImp').onclick = TwistSpinImp;
  document.getElementById('TwistBackToOptions2').onclick = function() {
    document.getElementById('linea').innerHTML = "";
    showMenu("twist_options")
  };
}

init()
