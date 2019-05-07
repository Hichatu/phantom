var gameData = {
  clicks: 0,
  clicksPerClick: 1
}

function clickClicks() {
	gameData.clicks += gameData.clicksPerClick
	document.getElementById("clicksClicked").innerHTML = gameData.clicks + " Clicks Clicked"
}

function buy2xClick() {
	if gameData.clicks >= 20 {
		gameData.clicksPerClick = gameData.clicksPerClick * 2
	}
}

var saveGameLoop = window.setInterval(function() {
	localStorage.setItem("clickClickerSave", JSON.stringify(gameData))
}, 1)

var savegame = JSON.parse(localStorage.getItem("clickClickerSave"))
if (savegame !== null) {
	gameData = savegame
}
