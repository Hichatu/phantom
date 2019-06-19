//Game data is stored here
var gameData = {
	klicks: 0,
	klicksPerClick: 1,
	klicks2xPrice: 64,
}

//Onload page function
window.onload = function onload() {
	document.getElementById("klicks").innerHTML = gameData.klicks
}

//Loop for various stuff
var windowLoop = window.setInterval(function() {
  elementchecker()
}, 1)

//A check to see what elements should be displayed on the page
function elementchecker() {
	if (gameData.klicks >= gameData.klicks2xPrice/2) {
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
		gameData.klicks2xPrice *= 3
		document.getElementById("2xClickButton").innerHTML = "Buy 2x Clicking (Cost " + gameData.klicks2xPrice + ")"
	}
}

//Reset Function
function reset() {
	gameData.klicks = 0
	document.getElementById("klicks").innerHTML = gameData.klicks
	gameData.klicksPerClick = 1
	gameData.klicks2xPrice = 64
}
