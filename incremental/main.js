//Game data is stored here
var gameData = {
	klicks: 0,
	klicksPerClick: 1,
	klicks2xPrice: 64,
}

//Lidl way to fix "0 Klicks" on page load, also runs element checker
window.onload = function onload() {
	gameData.klicks += 1
	gameData.klicks -= 1
	document.getElementById("klicks").innerHTML = gameData.klicks
	elementchecker()
}

//A loop to check for which elements should be displayed
function elementchecker() {
	if (gameData.klicks >= 32) {
		document.getElementById("2xClickButton").style.display = "";
	}
	else {
		document.getElementById("2xClickButton").style.display = "none";
	}
}

//Clicky Klicks
function clickButton() {
	gameData.klicks += gameData.klicksPerClick
	document.getElementById("klicks").innerHTML = gameData.klicks
}

//Buy 2x Clicking Power
function buy2xClick() {
	if(gameData.klicks >= gameData.klicks2xPrice) {
		gameData.klicks -= gameData.klicks2xPrice
		document.getElementById("klicks").innerHTML = gameData.klicks
		gameData.klicksPerClick *= 2
		gameData.klicks2xPrice *= 2.5
	}
}

//Reset Function
function reset() {
	gameData.klicks = 0
	gameData.klicksPerClick = 1
	gameData.klicks2xPrice = 64
}