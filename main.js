import Never from './Never.js';;

var never;

function GoToNever() {
  document.getElementById('yonunca').classList.remove("menu-hidden");
  document.getElementById('yonuncaf').classList.remove("menu-hidden");
  document.getElementById('menu').classList.add("menu-hidden");
  never = new Never() 
  NeverNext()
}

function BackToMenu() {
  document.getElementById('yonunca').classList.add("menu-hidden");
  document.getElementById('yonuncaf').classList.add("menu-hidden");
  document.getElementById('menu').classList.remove("menu-hidden");
}

function NeverNext() {
  document.getElementById('never_text').innerHTML = never.nextTurn();
}

function init() {
  document.getElementById('GoToNever').onclick = GoToNever;
  document.getElementById('NeverNext').onclick = NeverNext;
  document.getElementById('BackToMenu').onclick = BackToMenu;
}

init()
