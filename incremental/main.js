var gameData = {
  clicks: 0,
  clicksPerClick: 1,
  clicks2xClickCost: 16,
  clicksAutoClickerCost: 256,
}

function clickClicks() {
	gameData.clicks += gameData.clicksPerClick
	document.getElementById("clicksClicked").innerHTML = gameData.clicks + " Clicks Clicked"
}

var saveGameLoop = window.setInterval(function() {
	localStorage.setItem("clickClickerSave", JSON.stringify(gameData))
}, 1)

var savegame = JSON.parse(localStorage.getItem("clickClickerSave"))
if (savegame !== null) {
	gameData = savegame
}

function reset() {
	gameData.clicks = 0
	gameData.clicksPerClick = 1
	gameData. clicks2xClickCost = 16
	gameData.clicksAutoClickerCost = 256
}